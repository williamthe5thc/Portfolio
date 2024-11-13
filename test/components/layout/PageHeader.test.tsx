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
      renderHeader({
        title: 'Test',
        breadcrumbs
      });
      
      const separators = screen.getAllByTestId('breadcrumb-separator');
      expect(separators).toHaveLength(breadcrumbs.length - 1);
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
      
      expect(screen.getByText('Extra content').closest('div'))
        .toHaveClass('max-w-4xl');
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
    it('animates title on mount', () => {
      renderHeader({ title: 'Test' });
      
      const titleContainer = screen.getByText('Test').parentElement;
      expect(titleContainer).toHaveAttribute('data-animate');
    });

    it('uses stagger effect for multiple elements', () => {
      renderHeader({
        title: 'Test',
        subtitle: 'Subtitle',
        breadcrumbs: [{ label: 'Home', href: '/' }]
      });
      
      const animatedElements = screen.getAllByTestId(/animate/);
      animatedElements.forEach((el, index) => {
        expect(el).toHaveStyle({
          '--motion-delay': `${index * 0.1}s`
        });
      });
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
        breadcrumbs: [{ label: 'Home', href: '/' }]
      });
      
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAttribute('tabindex', '0');
      });
    });
  });

  describe('Responsive Design', () => {
    it('adjusts padding on different screens', () => {
      const { container } = renderHeader({ title: 'Test' });
      
      expect(container.firstChild).toHaveClass('py-8', 'md:py-12', 'lg:py-16');
    });

    it('maintains readable text sizes', () => {
      renderHeader({
        title: 'Test',
        subtitle: 'Subtitle'
      });
      
      const title = screen.getByText('Test');
      const subtitle = screen.getByText('Subtitle');
      
      expect(title).toHaveClass('text-3xl', 'md:text-4xl');
      expect(subtitle).toHaveClass('text-lg', 'md:text-xl');
    });
  });
});