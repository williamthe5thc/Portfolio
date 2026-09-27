import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { MemoryRouter, useNavigate, type NavigateFunction } from 'react-router-dom';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';

/*
  GoogleAnalytics is the only thing that sends page views: exactly one
  ('event', 'page_view') per pathname change, and never gtag('config'),
  which GA4 counts as another page view. The old expectations (a config call
  per route, a console warning when gtag is missing) encoded the
  double-counting behaviour that was fixed.
*/

const mockGtag = vi.fn();

let navigate: NavigateFunction;
const NavigateHandle = () => {
  navigate = useNavigate();
  return null;
};

const renderAt = (entry = '/') =>
  render(
    <MemoryRouter initialEntries={[entry]}>
      <GoogleAnalytics />
      <NavigateHandle />
    </MemoryRouter>
  );

const pageViews = () =>
  mockGtag.mock.calls.filter(([command, name]) => command === 'event' && name === 'page_view');

const go = (to: string) => {
  act(() => {
    navigate(to);
  });
};

const flush = () => {
  act(() => {
    vi.advanceTimersByTime(300);
  });
};

describe('GoogleAnalytics', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockGtag.mockReset();
    window.gtag = mockGtag;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Page View Tracking', () => {
    it('sends one page view for the first page', () => {
      renderAt('/');
      flush();

      expect(pageViews()).toHaveLength(1);
      expect(mockGtag).toHaveBeenCalledWith(
        'event',
        'page_view',
        expect.objectContaining({
          page_path: '/',
          page_title: expect.any(String),
          page_location: expect.stringMatching(/\/$/)
        })
      );
    });

    it('sends exactly one page view per route change', () => {
      renderAt('/');
      flush();
      go('/about');
      flush();

      expect(pageViews()).toHaveLength(2);
      expect(pageViews()[1][2]).toEqual(
        expect.objectContaining({
          page_path: '/about',
          page_location: expect.stringContaining('/about')
        })
      );
    });

    it('reports the query string in page_location', () => {
      renderAt('/portfolio?category=all');
      flush();

      expect(pageViews()).toHaveLength(1);
      expect(pageViews()[0][2]).toEqual(
        expect.objectContaining({
          page_path: '/portfolio',
          page_location: expect.stringContaining('/portfolio?category=all')
        })
      );
    });

    it('does not count a query-only change (portfolio filter) as a new page', () => {
      renderAt('/portfolio');
      flush();
      go('/portfolio?category=all');
      flush();

      expect(pageViews()).toHaveLength(1);
    });
  });

  describe('No double counting', () => {
    it('never calls gtag config', () => {
      renderAt('/');
      flush();
      go('/contact');
      flush();

      expect(mockGtag.mock.calls.some(([command]) => command === 'config')).toBe(false);
    });

    it('sends each page of a rapid sequence exactly once', () => {
      renderAt('/');
      ['about', 'portfolio', 'contact'].forEach(path => go(`/${path}`));
      flush();

      expect(pageViews().map(([, , params]) => params.page_path)).toEqual([
        '/',
        '/about',
        '/portfolio',
        '/contact'
      ]);
    });
  });

  describe('Error Handling', () => {
    it('does nothing when gtag has not loaded', () => {
      delete (window as { gtag?: unknown }).gtag;

      expect(() => {
        renderAt('/');
        flush();
        go('/about');
        flush();
      }).not.toThrow();
      expect(mockGtag).not.toHaveBeenCalled();
    });
  });
});
