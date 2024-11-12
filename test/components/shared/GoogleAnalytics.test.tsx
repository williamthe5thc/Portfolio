import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';

// Mock window.gtag
const mockGtag = vi.fn();
window.gtag = mockGtag;

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useLocation: vi.fn()
}));

describe('GoogleAnalytics', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useLocation as jest.Mock).mockReturnValue({
      pathname: '/',
      search: '',
      hash: ''
    });
  });

  describe('Page View Tracking', () => {
    it('tracks initial page view', async () => {
      render(
        <MemoryRouter>
          <GoogleAnalytics />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', expect.objectContaining({
          page_path: '/',
          page_title: expect.any(String)
        }));
      });
    });

    it('tracks route changes', async () => {
      const { rerender } = render(
        <MemoryRouter>
          <GoogleAnalytics />
        </MemoryRouter>
      );

      // Simulate route change
      (useLocation as jest.Mock).mockReturnValue({
        pathname: '/about',
        search: '',
        hash: ''
      });

      rerender(
        <MemoryRouter>
          <GoogleAnalytics />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', expect.objectContaining({
          page_path: '/about'
        }));
      });
    });

    it('handles query parameters', async () => {
      (useLocation as jest.Mock).mockReturnValue({
        pathname: '/portfolio',
        search: '?type=development',
        hash: ''
      });

      render(
        <MemoryRouter>
          <GoogleAnalytics />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', expect.objectContaining({
          page_path: '/portfolio',
          page_location: expect.stringContaining('?type=development')
        }));
      });
    });
  });

  describe('Config Updates', () => {
    it('updates GA config on route change', async () => {
      const { rerender } = render(
        <MemoryRouter>
          <GoogleAnalytics />
        </MemoryRouter>
      );

      (useLocation as jest.Mock).mockReturnValue({
        pathname: '/contact',
        search: '',
        hash: ''
      });

      rerender(
        <MemoryRouter>
          <GoogleAnalytics />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(mockGtag).toHaveBeenCalledWith('config', expect.any(String), {
          page_path: '/contact'
        });
      });
    });
  });

  describe('Error Handling', () => {
    it('handles missing gtag gracefully', async () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      delete window.gtag;

      render(
        <MemoryRouter>
          <GoogleAnalytics />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Google Analytics not loaded'));
      });

      consoleSpy.mockRestore();
      window.gtag = mockGtag;
    });
  });

  describe('Performance', () => {
    it('debounces multiple rapid route changes', async () => {
      const { rerender } = render(
        <MemoryRouter>
          <GoogleAnalytics />
        </MemoryRouter>
      );

      // Simulate multiple rapid route changes
      ['about', 'portfolio', 'contact'].forEach(path => {
        (useLocation as jest.Mock).mockReturnValue({
          pathname: `/${path}`,
          search: '',
          hash: ''
        });

        rerender(
          <MemoryRouter>
            <GoogleAnalytics />
          </MemoryRouter>
        );
      });

      await waitFor(() => {
        expect(mockGtag).toHaveBeenCalledTimes(2); // Initial + last change
      });
    });
  });
});