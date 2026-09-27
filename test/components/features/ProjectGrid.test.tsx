//tests/components/features/ProjectGrid.test.tsx

import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ProjectGrid } from '@/components/features/portfolio/ProjectGrid';

const mockProjects = [
  {
    id: 'project-1',
    title: 'Project 1',
    description: 'Description 1',
    image: '/image1.jpg',
    category: 'development' as const,
    tags: ['React', 'TypeScript'],
    status: 'completed' as const,
    date: '2024'
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'Description 2',
    image: '/image2.jpg',
    category: 'elearning' as const,
    tags: ['Articulate', 'LMS'],
    status: 'completed' as const,
    date: '2024'
  }
];

// Cards link to their detail pages with router links, so the grid renders
// inside a router as it does in the app.
const renderGrid = (props: Partial<React.ComponentProps<typeof ProjectGrid>> = {}) =>
  render(<ProjectGrid projects={mockProjects} showFilters={true} {...props} />, {
    wrapper: MemoryRouter
  });

// The layout grid is a plain <div class="grid ...">, not an ARIA grid.
const layoutGrid = () => document.querySelector('.grid') as HTMLElement;

describe('ProjectGrid', () => {
  beforeEach(() => {
    renderGrid();
  });

  describe('Grid Layout', () => {
    it('renders all projects', () => {
      mockProjects.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
        expect(screen.getByText(project.description)).toBeInTheDocument();
      });
    });

    it('displays projects in grid format', () => {
      expect(layoutGrid()).toBeInTheDocument();
      expect(layoutGrid().children).toHaveLength(mockProjects.length);
    });
  });

  describe('Filtering', () => {
    it('shows filter buttons when enabled', () => {
      // One button per category present in the projects, labelled with the
      // category id.
      expect(screen.getByRole('button', { name: /all projects/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'development' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'elearning' })).toBeInTheDocument();
    });

    it('marks the active filter with aria-pressed', async () => {
      const user = userEvent.setup();
      expect(screen.getByRole('button', { name: /all projects/i })).toHaveAttribute('aria-pressed', 'true');

      await user.click(screen.getByRole('button', { name: 'development' }));

      expect(screen.getByRole('button', { name: 'development' })).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByRole('button', { name: /all projects/i })).toHaveAttribute('aria-pressed', 'false');
    });

    it('filters projects by category', async () => {
      const user = userEvent.setup();
      const developmentFilter = screen.getByText(/development/i);

      await user.click(developmentFilter);

      expect(screen.getByText('Project 1')).toBeInTheDocument();
      expect(screen.queryByText('Project 2')).not.toBeInTheDocument();
    });

    it('shows "no projects" message when filter returns no results', () => {
      // Buttons exist only for categories that have projects, so an empty
      // result can only come from the initial filter prop.
      cleanup();
      renderGrid({ filter: 'research', showFilters: false });

      expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
    });
  });

  describe('Project Cards', () => {
    it('displays project tags', () => {
      mockProjects.forEach(project => {
        project.tags.forEach(tag => {
          expect(screen.getByText(tag)).toBeInTheDocument();
        });
      });
    });

    it('shows project status badges', () => {
      // The status slug is shown as a readable label.
      expect(screen.getAllByText('Completed')).toHaveLength(mockProjects.length);
    });
  });

  describe('Animation and Interaction', () => {
    it('animates projects when filtering', async () => {
      const user = userEvent.setup();
      const filter = screen.getByText(/development/i);

      await user.click(filter);

      // Each card sits in a motion.div (tagged by the setup's framer-motion mock).
      const projectCard = screen.getByText('Project 1').closest('.grid > div');
      expect(projectCard).toHaveAttribute('data-testid', 'motion-component');
      expect(screen.queryByText('Project 2')).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has accessible filter buttons', () => {
      const filterButtons = screen.getAllByRole('button');
      filterButtons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });

    it('maintains focus after filtering', async () => {
      const user = userEvent.setup();
      const filter = screen.getByText(/development/i);

      await user.click(filter);
      expect(filter).toHaveFocus();
    });
  });

  describe('Responsive Behavior', () => {
    it('adjusts grid columns based on screen size', () => {
      expect(layoutGrid()).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
    });
  });
});