//PortfolioFiltering.test.tsx

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useSearchParams } from 'react-router-dom';
import { ProjectGrid } from '@/components/features/portfolio/ProjectGrid';
import { projects } from '@/content';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useSearchParams: vi.fn()
}));

const mockProjects = projects.slice(0, 5); // Take first 5 projects for testing

const renderProjectGrid = (props = {}) => {
  return render(
    <MemoryRouter>
      <ProjectGrid 
        projects={mockProjects}
        showFilters={true}
        {...props}
      />
    </MemoryRouter>
  );
};

describe('Portfolio Filtering', () => {
  const mockSetSearchParams = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useSearchParams as any).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams
    ]);
  });

  describe('Filter UI', () => {
    it('renders filter buttons for each category', () => {
      renderProjectGrid();
      
      expect(screen.getByText(/all projects/i)).toBeInTheDocument();
      expect(screen.getByText(/development/i)).toBeInTheDocument();
      expect(screen.getByText(/design/i)).toBeInTheDocument();
      expect(screen.getByText(/instructional/i)).toBeInTheDocument();
    });

    it('highlights active filter', () => {
      (useSearchParams as any).mockReturnValue([
        new URLSearchParams('type=development'),
        mockSetSearchParams
      ]);

      renderProjectGrid();
      
      const activeFilter = screen.getByText(/development/i);
      expect(activeFilter).toHaveClass('bg-primary-600', 'text-white');
    });

    it('animates filter buttons on hover', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      const filterButton = screen.getByText(/development/i);
      await user.hover(filterButton);
      
      expect(filterButton).toHaveStyle('transform: scale(1.05)');
    });
  });

  describe('Filtering Logic', () => {
    it('filters projects by category', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      const developmentFilter = screen.getByText(/development/i);
      await user.click(developmentFilter);
      
      const developmentProjects = mockProjects.filter(p => 
        p.category === 'development'
      );
      
      developmentProjects.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });
      
      const otherProjects = mockProjects.filter(p => 
        p.category !== 'development'
      );
      
      otherProjects.forEach(project => {
        expect(screen.queryByText(project.title)).not.toBeInTheDocument();
      });
    });

    it('shows all projects when "All" is selected', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      // First filter to development
      await user.click(screen.getByText(/development/i));
      
      // Then show all
      await user.click(screen.getByText(/all projects/i));
      
      mockProjects.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });
    });

    it('handles empty filter results gracefully', () => {
      (useSearchParams as any).mockReturnValue([
        new URLSearchParams('type=nonexistent'),
        mockSetSearchParams
      ]);

      renderProjectGrid();
      
      expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
    });
  });

  describe('URL Integration', () => {
    it('updates URL params when filter changes', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      await user.click(screen.getByText(/development/i));
      
      expect(mockSetSearchParams).toHaveBeenCalledWith({ type: 'development' });
    });

    it('initializes with URL filter', () => {
      (useSearchParams as any).mockReturnValue([
        new URLSearchParams('type=development'),
        mockSetSearchParams
      ]);

      renderProjectGrid();
      
      const developmentProjects = mockProjects.filter(p => 
        p.category === 'development'
      );
      
      developmentProjects.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });
    });
  });

  describe('Animation and Performance', () => {
    it('animates projects when filtering', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      const projectCards = screen.getAllByTestId('project-card');
      await user.click(screen.getByText(/development/i));
      
      projectCards.forEach(card => {
        expect(card).toHaveAttribute('data-animate');
      });
    });

    it('optimizes animations with stagger effect', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      const projectCards = screen.getAllByTestId('project-card');
      await user.click(screen.getByText(/development/i));
      
      projectCards.forEach((card, index) => {
        expect(card).toHaveStyle({
          '--motion-delay': `${index * 0.1}s`
        });
      });
    });
  });

  describe('Accessibility', () => {
    it('maintains focus after filtering', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      const filterButton = screen.getByText(/development/i);
      await user.click(filterButton);
      
      expect(filterButton).toHaveFocus();
    });

    it('announces filter changes to screen readers', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      const filterButton = screen.getByText(/development/i);
      await user.click(filterButton);
      
      expect(filterButton).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByRole('region')).toHaveAttribute('aria-live', 'polite');
    });

    it('provides keyboard navigation for filters', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      await user.tab();
      expect(screen.getByText(/all projects/i)).toHaveFocus();
      
      await user.keyboard('{Enter}');
      expect(mockSetSearchParams).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('handles rapid filter changes', async () => {
      const user = userEvent.setup();
      renderProjectGrid();
      
      const filters = [
        'development',
        'design',
        'instructional',
        'development'
      ];
      
      for (const filter of filters) {
        await user.click(screen.getByText(new RegExp(filter, 'i')));
      }
      
      expect(mockSetSearchParams).toHaveBeenCalledTimes(filters.length);
    });

    it('debounces filter changes for performance', async () => {
      vi.useFakeTimers();
      const user = userEvent.setup();
      renderProjectGrid();
      
      await user.click(screen.getByText(/development/i));
      vi.advanceTimersByTime(100);
      await user.click(screen.getByText(/design/i));
      vi.advanceTimersByTime(100);
      
      expect(mockSetSearchParams).toHaveBeenCalledTimes(1);
      
      vi.useRealTimers();
    });
  });
});