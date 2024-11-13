//tests/pages/PortfolioPage.test.tsx


import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useSearchParams } from 'react-router-dom';
import PortfolioPage from '@/pages/PortfolioPage';
import { projects } from '@/content';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useSearchParams: vi.fn()
}));

// Mock ProjectGrid component
vi.mock('@/components/features', () => ({
  ProjectGrid: ({ projects }: { projects: any[] }) => (
    <div data-testid="mock-project-grid">
      {projects.map(project => (
        <div key={project.id} data-testid={`project-${project.id}`}>
          {project.title}
        </div>
      ))}
    </div>
  )
}));

describe('PortfolioPage', () => {
  const mockSetSearchParams = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
    (useSearchParams as any).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams
    ]);
  });

  describe('Page Structure', () => {
    it('renders page header with correct content', () => {
      render(<PortfolioPage />);
      
      expect(screen.getByText('Portfolio')).toBeInTheDocument();
      expect(screen.getByText(/explore my latest projects/i)).toBeInTheDocument();
    });

    it('renders all main sections', () => {
      render(<PortfolioPage />);
      
      expect(screen.getByTestId('mock-project-grid')).toBeInTheDocument();
      expect(screen.getByText(/all projects/i)).toBeInTheDocument();
    });
  });

  describe('Category Filtering', () => {
    it('renders category filter buttons', () => {
      render(<PortfolioPage />);
      
      expect(screen.getByText(/all projects/i)).toBeInTheDocument();
      expect(screen.getByText(/development/i)).toBeInTheDocument();
      expect(screen.getByText(/instructional design/i)).toBeInTheDocument();
    });

    it('handles category filter changes', async () => {
      const user = userEvent.setup();
      render(<PortfolioPage />);
      
      const developmentFilter = screen.getByText(/development/i);
      await user.click(developmentFilter);
      
      expect(mockSetSearchParams).toHaveBeenCalledWith({ type: 'development' });
    });

    it('filters projects based on URL params', () => {
      (useSearchParams as any).mockReturnValue([
        new URLSearchParams('type=development'),
        mockSetSearchParams
      ]);
      
      render(<PortfolioPage />);
      
      const developmentProjects = projects.filter(p => p.tags.includes('Development'));
      developmentProjects.forEach(project => {
        expect(screen.getByTestId(`project-${project.id}`)).toBeInTheDocument();
      });
    });

    it('shows all projects when no filter is active', () => {
      render(<PortfolioPage />);
      
      projects.forEach(project => {
        expect(screen.getByTestId(`project-${project.id}`)).toBeInTheDocument();
      });
    });
  });

  describe('Category Overview Cards', () => {
    it('displays category cards with correct information', () => {
      render(<PortfolioPage />);
      
      expect(screen.getByText('Coding Projects')).toBeInTheDocument();
      expect(screen.getByText('Instructional Design')).toBeInTheDocument();
      expect(screen.getByText('Art & Video')).toBeInTheDocument();
    });

    it('shows project count for each category', () => {
      render(<PortfolioPage />);
      
      const categoryCards = screen.getAllByRole('article');
      categoryCards.forEach(card => {
        expect(card.textContent).toMatch(/\d+ projects$/);
      });
    });

    it('applies hover effects to category cards', () => {
      render(<PortfolioPage />);
      
      const cards = screen.getAllByRole('article');
      cards.forEach(card => {
        expect(card).toHaveClass('hover:shadow-lg', 'transition-shadow');
      });
    });
  });

  describe('Project Grid', () => {
    it('passes filtered projects to ProjectGrid', () => {
      (useSearchParams as any).mockReturnValue([
        new URLSearchParams('type=development'),
        mockSetSearchParams
      ]);
      
      render(<PortfolioPage />);
      
      const developmentProjects = projects.filter(p => p.tags.includes('Development'));
      expect(screen.getAllByTestId(/^project-/)).toHaveLength(developmentProjects.length);
    });

    it('shows "no projects" message when filter returns empty', () => {
      (useSearchParams as any).mockReturnValue([
        new URLSearchParams('type=nonexistent'),
        mockSetSearchParams
      ]);
      
      render(<PortfolioPage />);
      
      expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
    });
  });

  describe('Animations', () => {
    it('animates category filters', async () => {
      render(<PortfolioPage />);
      
      const filters = screen.getByRole('group');
      expect(filters).toHaveAttribute('data-animate');
      
      await waitFor(() => {
        expect(filters).toHaveStyle({ opacity: '1' });
      });
    });
  });

  describe('URL Integration', () => {
    it('syncs URL parameters with active filter', async () => {
      const user = userEvent.setup();
      render(<PortfolioPage />);
      
      const filter = screen.getByText(/instructional design/i);
      await user.click(filter);
      
      expect(mockSetSearchParams).toHaveBeenCalledWith({ type: 'instructional' });
    });

    it('initializes with URL filter', () => {
      (useSearchParams as any).mockReturnValue([
        new URLSearchParams('type=development'),
        mockSetSearchParams
      ]);
      
      render(<PortfolioPage />);
      
      const developmentFilter = screen.getByText(/development/i);
      expect(developmentFilter).toHaveClass('bg-primary-600');
    });
  });

  describe('Accessibility', () => {
    it('maintains focus after filtering', async () => {
      const user = userEvent.setup();
      render(<PortfolioPage />);
      
      const filter = screen.getByText(/development/i);
      await user.click(filter);
      
      expect(filter).toHaveFocus();
    });

    it('provides proper ARIA labels for interactive elements', () => {
      render(<PortfolioPage />);
      
      const filterButtons = screen.getAllByRole('button');
      filterButtons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });
  });
});