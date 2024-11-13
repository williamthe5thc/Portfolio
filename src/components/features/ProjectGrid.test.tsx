// src/components/features/ProjectGrid.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ProjectGrid } from './ProjectGrid';
import { projects } from '@/content';

describe('ProjectGrid', () => {
  describe('Project Display', () => {
    it('renders all projects initially', () => {
      render(
        <MemoryRouter>
          <ProjectGrid projects={projects} />
        </MemoryRouter>
      );

      const projectCards = screen.getAllByTestId('project-card');
      expect(projectCards).toHaveLength(projects.length);
    });

    it('displays project information correctly', () => {
      render(
        <MemoryRouter>
          <ProjectGrid projects={projects.slice(0, 1)} />
        </MemoryRouter>
      );

      const project = projects[0];
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      project.tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    it('shows empty state when no projects match filter', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects} 
            showFilters={true}
          />
        </MemoryRouter>
      );

      // Apply non-matching filter
      const filterInput = screen.getByPlaceholderText(/search/i);
      await user.type(filterInput, 'nonexistent project');

      expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
    });
  });

  describe('Filtering', () => {
    it('filters projects by category', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects} 
            showFilters={true}
          />
        </MemoryRouter>
      );

      // Click category filter
      await user.click(screen.getByRole('button', { name: /development/i }));

      // Verify only development projects are shown
      const projectCards = screen.getAllByTestId('project-card');
      projectCards.forEach(card => {
        expect(card).toHaveTextContent(/development/i);
      });
    });

    it('handles multiple active filters', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects} 
            showFilters={true}
          />
        </MemoryRouter>
      );

      // Click multiple filters
      await user.click(screen.getByRole('button', { name: /development/i }));
      await user.click(screen.getByRole('button', { name: /react/i }));

      // Verify filtered results
      const projectCards = screen.getAllByTestId('project-card');
      projectCards.forEach(card => {
        const cardText = card.textContent?.toLowerCase() || '';
        expect(
          cardText.includes('development') && 
          cardText.includes('react')
        ).toBe(true);
      });
    });

    it('clears filters', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects} 
            showFilters={true}
          />
        </MemoryRouter>
      );

      // Apply and clear filter
      await user.click(screen.getByRole('button', { name: /development/i }));
      await user.click(screen.getByRole('button', { name: /clear/i }));

      const projectCards = screen.getAllByTestId('project-card');
      expect(projectCards).toHaveLength(projects.length);
    });
  });

  describe('Navigation', () => {
    it('navigates to project detail page', async () => {
      const user = userEvent.setup();
      const navigate = vi.fn();
      vi.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigate);

      render(
        <MemoryRouter>
          <ProjectGrid projects={projects.slice(0, 1)} />
        </MemoryRouter>
      );

      await user.click(screen.getByTestId('project-card'));
      expect(navigate).toHaveBeenCalledWith(`/portfolio/${projects[0].id}`);
    });

    it('opens external links in new tab', () => {
      const externalProject = {
        ...projects[0],
        projectUrl: 'https://example.com',
        detailPage: false
      };

      render(
        <MemoryRouter>
          <ProjectGrid projects={[externalProject]} />
        </MemoryRouter>
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://example.com');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Responsive Layout', () => {
    it('adjusts grid columns based on screen size', () => {
      render(
        <MemoryRouter>
          <ProjectGrid projects={projects} />
        </MemoryRouter>
      );

      const grid = screen.getByTestId('project-grid');
      expect(grid).toHaveClass(
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-3'
      );
    });
  });

  describe('Accessibility', () => {
    it('provides proper ARIA labels for interactive elements', () => {
      render(
        <MemoryRouter>
          <ProjectGrid 
            projects={projects} 
            showFilters={true}
          />
        </MemoryRouter>
      );

      const filterButtons = screen.getAllByRole('button');
      filterButtons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });

    it('ensures keyboard navigation works correctly', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectGrid projects={projects} />
        </MemoryRouter>
      );

      // Tab through project cards
      await user.tab();
      expect(screen.getAllByTestId('project-card')[0]).toHaveFocus();

      await user.tab();
      expect(screen.getAllByTestId('project-card')[1]).toHaveFocus();
    });
  });
});