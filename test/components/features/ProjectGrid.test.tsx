//tests/components/features/ProjectGrid.test.tsx

import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('ProjectGrid', () => {
  beforeEach(() => {
    render(<ProjectGrid projects={mockProjects} showFilters={true} />);
  });

  describe('Grid Layout', () => {
    it('renders all projects', () => {
      mockProjects.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
        expect(screen.getByText(project.description)).toBeInTheDocument();
      });
    });

    it('displays projects in grid format', () => {
      const grid = screen.getByRole('grid');
      expect(grid).toHaveClass('grid');
    });
  });

  describe('Filtering', () => {
    it('shows filter buttons when enabled', () => {
      expect(screen.getByText(/all projects/i)).toBeInTheDocument();
      expect(screen.getByText(/development/i)).toBeInTheDocument();
      expect(screen.getByText(/e-learning/i)).toBeInTheDocument();
    });

    it('filters projects by category', async () => {
      const user = userEvent.setup();
      const developmentFilter = screen.getByText(/development/i);

      await user.click(developmentFilter);

      expect(screen.getByText('Project 1')).toBeInTheDocument();
      expect(screen.queryByText('Project 2')).not.toBeInTheDocument();
    });

    it('shows "no projects" message when filter returns no results', async () => {
      const user = userEvent.setup();
      const emptyFilter = screen.getByText(/research/i);

      await user.click(emptyFilter);

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
      mockProjects.forEach(project => {
        expect(screen.getByText(project.status)).toBeInTheDocument();
      });
    });
  });

  describe('Animation and Interaction', () => {
    it('animates projects when filtering', async () => {
      const user = userEvent.setup();
      const filter = screen.getByText(/development/i);

      await user.click(filter);

      const projectCard = screen.getByText('Project 1').closest('div');
      expect(projectCard).toHaveAttribute('data-animate');
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
      const grid = screen.getByRole('grid');
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
    });
  });
});