//test/components/shared/LoadingScreen.test.tsx

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { LoadingScreen } from '@/components/shared/LoadingScreen';
import { siteConfig } from '@/content';

// Mock framer-motion to handle animations in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    svg: ({ children, ...props }: any) => <svg {...props}>{children}</svg>,
    circle: ({ children, ...props }: any) => <circle {...props}>{children}</circle>,
    path: ({ children, ...props }: any) => <path {...props}>{children}</path>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

describe('LoadingScreen', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe('Initial Rendering', () => {
    it('renders loading logo', () => {
      render(<LoadingScreen />);
      
      const logo = screen.getByRole('img', { hidden: true });
      expect(logo).toBeInTheDocument();
      expect(logo.tagName.toLowerCase()).toBe('svg');
    });

    it('displays branding when showBranding is true', () => {
      render(<LoadingScreen showBranding={true} />);
      
      expect(screen.getByText(siteConfig.author)).toBeInTheDocument();
      expect(screen.getByText(siteConfig.description)).toBeInTheDocument();
    });

    it('hides branding when showBranding is false', () => {
      render(<LoadingScreen showBranding={false} />);
      
      expect(screen.queryByText(siteConfig.author)).not.toBeInTheDocument();
      expect(screen.queryByText(siteConfig.description)).not.toBeInTheDocument();
    });
  });

  describe('Animation States', () => {
    it('applies initial animation states', () => {
      render(<LoadingScreen />);
      
      const container = screen.getByTestId('loading-container');
      expect(container).toHaveAttribute('data-animate', 'initial');
    });

    it('transitions to animated state', async () => {
      render(<LoadingScreen />);
      
      const container = screen.getByTestId('loading-container');
      
      await waitFor(() => {
        expect(container).toHaveAttribute('data-animate', 'animate');
      });
    });

    it('handles unmount animations', async () => {
      const { unmount } = render(<LoadingScreen />);
      
      const container = screen.getByTestId('loading-container');
      unmount();
      
      await waitFor(() => {
        expect(container).toHaveAttribute('data-animate', 'exit');
      });
    });
  });

  describe('Logo Animation', () => {
    it('animates logo paths sequentially', async () => {
      render(<LoadingScreen />);
      
      const paths = screen.getAllByRole('presentation');
      
      // Check initial state
      paths.forEach(path => {
        expect(path).toHaveStyle({ strokeDasharray: '0' });
      });
      
      // Advance animation timer
      vi.advanceTimersByTime(300);
      
      // Check animated state
      await waitFor(() => {
        paths.forEach(path => {
          expect(path).toHaveStyle({ strokeDasharray: '1' });
        });
      });
    });

    it('completes logo animation within expected duration', async () => {
      const { rerender } = render(<LoadingScreen />);
      
      const startTime = performance.now();
      vi.advanceTimersByTime(600); // Default animation duration
      rerender(<LoadingScreen />);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThanOrEqual(700); // Allow small buffer
    });
  });

  describe('Performance', () => {
    it('optimizes animation performance', async () => {
      const { container } = render(<LoadingScreen />);
      
      expect(container.querySelector('.will-change-opacity')).toBeTruthy();
      expect(container.querySelector('.will-change-transform')).toBeTruthy();
    });

    it('uses transform instead of position for animations', () => {
      const { container } = render(<LoadingScreen />);
      
      const animatedElements = container.querySelectorAll('[data-animate]');
      animatedElements.forEach(element => {
        const styles = window.getComputedStyle(element);
        expect(styles.transform).not.toBe('none');
        expect(styles.position).not.toBe('absolute');
      });
    });
  });

  describe('Accessibility', () => {
    it('maintains proper ARIA attributes during loading', () => {
      render(<LoadingScreen />);
      
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite');
      expect(screen.getByRole('alert')).toHaveAttribute('aria-busy', 'true');
    });

    it('provides status updates for screen readers', () => {
      render(<LoadingScreen />);
      
      expect(screen.getByText('Loading...')).toHaveAttribute('aria-hidden', 'false');
    });

    it('handles reduced motion preferences', () => {
      // Mock prefers-reduced-motion media query
      window.matchMedia = vi.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
      }));

      render(<LoadingScreen />);
      
      const animatedElements = screen.getAllByTestId(/animate/);
      animatedElements.forEach(element => {
        expect(element).toHaveAttribute('data-reduced-motion', 'true');
      });
    });
  });

  describe('Responsive Behavior', () => {
    it('adapts logo size based on viewport', () => {
      render(<LoadingScreen />);
      
      const logo = screen.getByRole('img', { hidden: true });
      expect(logo).toHaveClass('w-20', 'h-20', 'md:w-24', 'md:h-24');
    });

    it('maintains readable text size on small screens', () => {
      render(<LoadingScreen showBranding={true} />);
      
      const title = screen.getByText(siteConfig.author);
      const description = screen.getByText(siteConfig.description);
      
      expect(title).toHaveClass('text-2xl', 'md:text-3xl');
      expect(description).toHaveClass('text-base', 'md:text-lg');
    });
  });

  describe('Edge Cases', () => {
    it('handles rapid mount/unmount cycles', async () => {
      const { rerender, unmount } = render(<LoadingScreen />);
      
      // Simulate rapid remounts
      for (let i = 0; i < 5; i++) {
        rerender(<LoadingScreen key={i} />);
        await vi.advanceTimersByTimeAsync(100);
      }
      
      unmount();
      
      // Check for memory leaks
      expect(vi.getTimerCount()).toBe(0);
    });

    it('handles missing config data gracefully', () => {
      const originalConfig = { ...siteConfig };
      (siteConfig as any).author = undefined;
      (siteConfig as any).description = undefined;
      
      render(<LoadingScreen showBranding={true} />);
      
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
      
      // Restore config
      Object.assign(siteConfig, originalConfig);
    });

    it('prevents interaction during loading', () => {
      render(<LoadingScreen />);
      
      const overlay = screen.getByTestId('loading-container');
      expect(overlay).toHaveClass('pointer-events-none');
    });
  });

  describe('Custom Props', () => {
    it('handles custom className', () => {
      render(<LoadingScreen className="custom-class" />);
      
      const container = screen.getByTestId('loading-container');
      expect(container).toHaveClass('custom-class');
    });

    it('accepts custom animation duration', async () => {
      render(<LoadingScreen animationDuration={0.3} />);
      
      const logo = screen.getByRole('img', { hidden: true });
      
      vi.advanceTimersByTime(300);
      
      await waitFor(() => {
        expect(logo).toHaveAttribute('data-animate', 'animate');
      });
    });
  });
});