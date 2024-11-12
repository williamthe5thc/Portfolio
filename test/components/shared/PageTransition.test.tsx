//PageTransition.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PageTransition from '@/components/shared/PageTransition';

// Mock components for testing routes
const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, onAnimationComplete, ...props }: any) => (
      <div 
        data-testid="motion-div" 
        onClick={() => onAnimationComplete?.()} 
        {...props}
      >
        {children}
      </div>
    ),
  },
}));

const renderWithRouter = (initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </PageTransition>
    </MemoryRouter>
  );
};

describe('PageTransition', () => {
  describe('Animation States', () => {
    it('applies initial animation state', () => {
      renderWithRouter();
      
      const transitionElement = screen.getByTestId('motion-div');
      expect(transitionElement).toHaveAttribute('data-animate', 'initial');
    });

    it('transitions to animated state', async () => {
      renderWithRouter();
      
      const transitionElement = screen.getByTestId('motion-div');
      
      await waitFor(() => {
        expect(transitionElement).toHaveAttribute('data-animate', 'animate');
      });
    });

    it('handles exit animations', async () => {
      const { rerender } = renderWithRouter('/');
      
      const initialElement = screen.getByTestId('motion-div');
      rerender(
        <MemoryRouter initialEntries={['/about']}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </PageTransition>
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(initialElement).toHaveAttribute('data-animate', 'exit');
      });
    });
  });

  describe('Route Transitions', () => {
    it('maintains content during transitions', async () => {
      const { rerender } = renderWithRouter('/');
      
      expect(screen.getByText('Home Page')).toBeInTheDocument();
      
      rerender(
        <MemoryRouter initialEntries={['/about']}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </PageTransition>
        </MemoryRouter>
      );
      
      // Both pages should be present during transition
      expect(screen.getByText('Home Page')).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByText('About Page')).toBeInTheDocument();
      });
    });

    it('completes transitions within expected duration', async () => {
      const { rerender } = renderWithRouter('/');
      
      const startTime = performance.now();
      rerender(
        <MemoryRouter initialEntries={['/about']}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </PageTransition>
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(screen.getByText('About Page')).toBeInTheDocument();
      });
      
      const endTime = performance.now();
      expect(endTime - startTime).toBeLessThanOrEqual(400); // Default duration + buffer
    });
  });

  describe('Performance', () => {
    it('uses transform for animations', () => {
      renderWithRouter();
      
      const transitionElement = screen.getByTestId('motion-div');
      expect(transitionElement).toHaveStyle({
        transform: expect.any(String)
      });
    });

    it('optimizes animations with will-change', () => {
      renderWithRouter();
      
      const transitionElement = screen.getByTestId('motion-div');
      expect(transitionElement).toHaveClass('will-change-opacity', 'will-change-transform');
    });
  });

  describe('Accessibility', () => {
    it('maintains focus during transitions', async () => {
      const { rerender } = renderWithRouter('/');
      
      const button = document.createElement('button');
      button.textContent = 'Focus me';
      screen.getByText('Home Page').appendChild(button);
      button.focus();
      
      rerender(
        <MemoryRouter initialEntries={['/about']}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </PageTransition>
        </MemoryRouter>
      );
      
      await waitFor(() => {
        expect(document.activeElement).toBe(button);
      });
    });

    it('announces route changes to screen readers', () => {
      renderWithRouter();
      
      const transitionElement = screen.getByTestId('motion-div');
      expect(transitionElement).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Edge Cases', () => {
    it('handles rapid route changes', async () => {
      const { rerender } = renderWithRouter('/');
      
      // Simulate rapid navigation
      for (let i = 0; i < 5; i++) {
        rerender(
          <MemoryRouter initialEntries={[i % 2 === 0 ? '/' : '/about']}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </PageTransition>
          </MemoryRouter>
        );
      }
      
      // Should end up showing the last route
      await waitFor(() => {
        expect(screen.getByText('Home Page')).toBeInTheDocument();
      });
    });

    it('cleans up animations on unmount', () => {
      const { unmount } = renderWithRouter();
      
      unmount();
      
      // Check for memory leaks
      expect(vi.getTimerCount()).toBe(0);
    });
  });
});