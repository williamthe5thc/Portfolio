//ProjectGridAnimations.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ProjectGrid } from '@/components/features';
import { projects } from '@/content';

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
  AnimatePresence: ({ children }: any) => children,
}));

describe('ProjectGrid Animations', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe('Initial Animation', () => {
    it('animates projects on initial render', async () => {
      render(
        <MemoryRouter>
          <ProjectGrid projects={projects.slice(0, 3)} />
        </MemoryRouter>
      );

      const projectCards = screen.getAllByTestId('motion-div');
      
      projectCards.forEach(card => {
        expect(card).toHaveStyle({
          opacity: '0',
          transform: 'translateY(20px)'
        });
      });

      await waitFor(() => {
        projectCards.forEach(card => {
          expect(card).toHaveStyle({
            opacity: '1',
            transform: 'translateY(0px)'
          });
        });
      });
    });

    it('applies stagger effect to project cards', async () => {
      render(
        <MemoryRouter>
          <ProjectGrid projects={projects.slice(0, 3)} />
        </MemoryRouter>
      );

      const projectCards = screen.getAllByTestId('motion-div');
      
      projectCards.forEach((card, index) => {
        expect(card).toHaveStyle({
          '--stagger-delay': `${index * 0.1}s`
        });
      });
    });
  });

  describe('Filter Transitions', () => {
    it('animates projects out when filtered', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects} 
            showFilters={true}
          />
        </MemoryRouter>
      );

      const filterButton = screen.getByText(/development/i);
      await user.click(filterButton);

      const exitingCards = screen.getAllByTestId('motion-div').filter(
        card => !card.textContent?.includes('development')
      );

      exitingCards.forEach(card => {
        expect(card).toHaveStyle({
          opacity: '0',
          transform: 'translateY(-20px)'
        });
      });
    });

    it('animates new projects in after filtering', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects} 
            showFilters={true}
          />
        </MemoryRouter>
      );

      const filterButton = screen.getByText(/development/i);
      await user.click(filterButton);

      const newCards = screen.getAllByTestId('motion-div').filter(
        card => card.textContent?.includes('development')
      );

      await waitFor(() => {
        newCards.forEach(card => {
          expect(card).toHaveStyle({
            opacity: '1',
            transform: 'translateY(0px)'
          });
        });
      });
    });
  });

  describe('Animation Performance', () => {
    it('uses transform instead of position properties', () => {
      render(
        <MemoryRouter>
          <ProjectGrid projects={projects.slice(0, 3)} />
        </MemoryRouter>
      );

      const cards = screen.getAllByTestId('motion-div');
      
      cards.forEach(card => {
        const styles = window.getComputedStyle(card);
        expect(styles.transform).toBeDefined();
        expect(styles.position).toBe('static');
      });
    });

    it('optimizes animations with will-change', () => {
      render(
        <MemoryRouter>
          <ProjectGrid projects={projects.slice(0, 3)} />
        </MemoryRouter>
      );

      const cards = screen.getAllByTestId('motion-div');
      
      cards.forEach(card => {
        expect(card).toHaveStyle({
          'will-change': 'transform, opacity'
        });
      });
    });
  });

  describe('Layout Animations', () => {
    it('animates grid layout changes', async () => {
      const { rerender } = render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects.slice(0, 3)} 
            layout="grid"
          />
        </MemoryRouter>
      );

      rerender(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects.slice(0, 3)} 
            layout="list"
          />
        </MemoryRouter>
      );

      const container = screen.getByTestId('project-grid');
      expect(container).toHaveAttribute('data-animate-layout');
    });

    it('maintains smooth transitions during layout changes', async () => {
      const { rerender } = render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects.slice(0, 3)} 
            layout="grid"
          />
        </MemoryRouter>
      );

      const initialPositions = screen.getAllByTestId('motion-div').map(
        card => card.getBoundingClientRect()
      );

      rerender(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects.slice(0, 3)} 
            layout="list"
          />
        </MemoryRouter>
      );

      await waitFor(() => {
        const newPositions = screen.getAllByTestId('motion-div').map(
          card => card.getBoundingClientRect()
        );
        
        // Check that positions have changed smoothly
        newPositions.forEach((pos, i) => {
          expect(pos).not.toEqual(initialPositions[i]);
        });
      });
    });
  });

  describe('Accessibility', () => {
    it('maintains focus during animations', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects} 
            showFilters={true}
          />
        </MemoryRouter>
      );

      const filterButton = screen.getByText(/development/i);
      await user.click(filterButton);
      
      expect(filterButton).toHaveFocus();
    });

    it('respects reduced motion preferences', () => {
      window.matchMedia = vi.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
      }));

      render(
        <MemoryRouter>
          <ProjectGrid projects={projects.slice(0, 3)} />
        </MemoryRouter>
      );

      const cards = screen.getAllByTestId('motion-div');
      
      cards.forEach(card => {
        expect(card).toHaveAttribute('data-reduced-motion', 'true');
      });
    });
  });
});