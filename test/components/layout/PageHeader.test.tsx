//PageHeader.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';

const renderHeader = (props = {}) => {
  return render(
    <MemoryRouter>
      <PageHeader {...props} />
    </MemoryRouter>
  );
};

describe('PageHeader', () => {
  describe('Basic Rendering', () => {
    it('renders title and subtitle', () => {
      renderHeader({
        title: 'Test Title',
        subtitle: 'Test Subtitle'
      });
      
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    });

    it('applies gradient background', () => {
      const { container } = renderHeader({ title: 'Test' });
      
      expect(container.firstChild).toHaveClass('bg-gradient-to-b', 'from-background-light', 'to-background');
    });

    it('handles missing subtitle gracefully', () => {
      renderHeader({ title: 'Test Title' });
      
      expect(screen.queryByText(/subtitle/i)).not.toBeInTheDocument();
    });
  });

  describe('Breadcrumbs', () => {
    const breadcrumbs = [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Current', href: '/projects/current' }
    ];

    it('renders breadcrumb trail', () => {
      renderHeader({
        title: 'Test',
        breadcrumbs
      });
      
      breadcrumbs.forEach(crumb => {
        expect(screen.getByText(crumb.label)).toBeInTheDocument();
      });
    });

    it('shows separator between breadcrumbs', () => {
      const { container } = renderHeader({
        title: 'Test',
        breadcrumbs
      });
      
      // Chevron icons, hidden from assistive technology.
      const separators = container.querySelectorAll('nav svg[aria-hidden="true"]');
      expect(separators).toHaveLength(breadcrumbs.length - 1);
    });

    it('marks the last crumb as the current page', () => {
      renderHeader({
        title: 'Test',
        breadcrumbs
      });

      expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page');
      expect(screen.queryByRole('link', { name: 'Current' })).not.toBeInTheDocument();
    });

    it('styles current page differently', () => {
      renderHeader({
        title: 'Test',
        breadcrumbs
      });
      
      const lastCrumb = screen.getByText(breadcrumbs[breadcrumbs.length - 1].label);
      expect(lastCrumb).toHaveClass('text-text-primary', 'font-medium');
    });
  });

  describe('Content Container', () => {
    it('constrains content width', () => {
      renderHeader({
        title: 'Test',
        children: <div>Extra content</div>
      });
      
      expect(screen.getByText('Extra content').closest('.max-w-4xl'))
        .not.toBeNull();
    });

    it('renders additional content', () => {
      renderHeader({
        title: 'Test',
        children: <button>Action</button>
      });
      
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Animation', () => {
    // App's PageTransition fades each page in. A second fade here multiplied
    // with it and left the header washed out, so PageHeader has none.
    it('does not animate the title on its own', () => {
      const { container } = renderHeader({
        title: 'Test',
        subtitle: 'Subtitle',
        breadcrumbs: [{ label: 'Home', href: '/' }]
      });

      expect(container.querySelector('[data-testid="motion-component"]')).toBeNull();
    });
  });

  describe('Accessibility', () => {
    it('uses proper heading hierarchy', () => {
      renderHeader({ title: 'Test' });
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent('Test');
    });

    it('provides navigation landmark for breadcrumbs', () => {
      renderHeader({
        title: 'Test',
        breadcrumbs: [{ label: 'Home', href: '/' }]
      });
      
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('makes breadcrumbs keyboard navigable', () => {
      renderHeader({
        title: 'Test',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Current', href: '/current' }
        ]
      });
      
      // Real links with an href are in the tab order without a tabindex.
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(1);
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
        expect(link).not.toHaveAttribute('tabindex', '-1');
      });
    });
  });

  describe('Responsive Design', () => {
    it('adjusts padding on different screens', () => {
      const { container } = renderHeader({ title: 'Test' });
      
      expect(container.firstChild).toHaveClass('py-12');
    });

    it('maintains readable text sizes', () => {
      renderHeader({
        title: 'Test',
        subtitle: 'Subtitle'
      });
      
      const title = screen.getByText('Test');
      const subtitle = screen.getByText('Subtitle');
      
      // Smaller on phones so long single words fit a 320px screen.
      expect(title).toHaveClass('text-3xl', 'sm:text-4xl', 'break-words');
      expect(subtitle).toHaveClass('text-xl');
    });
  });
});