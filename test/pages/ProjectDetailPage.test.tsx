//tests/pages/ProjectDetailPage.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useParams, useNavigate } from 'react-router-dom';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import { projects } from '@/content';

// Mock router hooks
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useParams: vi.fn(),
  useNavigate: vi.fn(),
  useLocation: () => ({ pathname: '/portfolio/test-project' })
}));

describe('ProjectDetailPage', () => {
  const mockNavigate = vi.fn();
  const mockProject = projects[0];

  beforeEach(() => {
    vi.clearAllMocks();
    (useParams as any).mockReturnValue({ projectId: mockProject.id });
    (useNavigate as any).mockReturnValue(mockNavigate);
  });

  describe('Project Loading', () => {
    it('loads project details successfully', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(screen.getByText(mockProject.title)).toBeInTheDocument();
      expect(screen.getByText(mockProject.description)).toBeInTheDocument();
      expect(screen.getByAltText(mockProject.title)).toHaveAttribute('src', mockProject.image);
    });

    it('redirects to portfolio on invalid project ID', () => {
      (useParams as any).mockReturnValue({ projectId: 'invalid-id' });
      
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(mockNavigate).toHaveBeenCalledWith('/portfolio', { replace: true });
    });

    it('handles missing project data gracefully', () => {
      const incompleteProject = { ...mockProject };
      delete incompleteProject.longDescription;
      delete incompleteProject.challenges;
      
      (useParams as any).mockReturnValue({ projectId: incompleteProject.id });

      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(screen.getByText(incompleteProject.title)).toBeInTheDocument();
      expect(screen.queryByText(/challenges/i)).not.toBeInTheDocument();
    });
  });

  describe('Project Content Display', () => {
    it('displays project metadata', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(screen.getByText(mockProject.category)).toBeInTheDocument();
      expect(screen.getByText(mockProject.date)).toBeInTheDocument();
      expect(screen.getByText(mockProject.status)).toBeInTheDocument();
    });

    it('renders project challenges and solutions', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      mockProject.challenges?.forEach(challenge => {
        expect(screen.getByText(challenge)).toBeInTheDocument();
      });
      
      mockProject.solutions?.forEach(solution => {
        expect(screen.getByText(solution)).toBeInTheDocument();
      });
    });

    it('displays technology tags', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      mockProject.tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });
  });

  describe('Project Navigation', () => {
    it('handles back button click', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const backButton = screen.getByText(/back to portfolio/i);
      await user.click(backButton);

      expect(mockNavigate).toHaveBeenCalledWith('/portfolio');
    });

    it('displays external project link when available', () => {
      const projectWithUrl = {
        ...mockProject,
        projectUrl: 'https://example.com'
      };

      (useParams as any).mockReturnValue({ projectId: projectWithUrl.id });

      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const link = screen.getByText(/view live project/i);
      expect(link).toHaveAttribute('href', projectWithUrl.projectUrl);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Layout and Styling', () => {
    it('maintains responsive grid layout', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const grid = screen.getByRole('main').firstChild;
      expect(grid).toHaveClass('grid', 'md:grid-cols-3', 'gap-8');
    });

    it('applies proper image sizing', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const image = screen.getByAltText(mockProject.title);
      expect(image).toHaveClass('w-full', 'h-auto', 'rounded-lg');
    });

    it('handles long content gracefully', () => {
      const projectWithLongContent = {
        ...mockProject,
        description: 'a'.repeat(1000),
        longDescription: 'b'.repeat(2000)
      };

      (useParams as any).mockReturnValue({ projectId: projectWithLongContent.id });

      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(screen.getByText('a'.repeat(1000))).toBeInTheDocument();
      expect(screen.getByText('b'.repeat(2000))).toBeInTheDocument();
    });
  });

  describe('Performance Optimizations', () => {
    it('lazy loads images', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const image = screen.getByAltText(mockProject.title);
      expect(image).toHaveAttribute('loading', 'lazy');
    });

    it('memoizes content to prevent unnecessary rerenders', async () => {
      const { rerender } = render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const initialContent = screen.getByRole('main').innerHTML;

      rerender(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(screen.getByRole('main').innerHTML).toBe(initialContent);
    });
  });

  describe('Error Handling', () => {
    it('handles navigation errors gracefully', async () => {
      const mockNavigateError = vi.fn(() => {
        throw new Error('Navigation failed');
      });
      (useNavigate as any).mockReturnValue(mockNavigateError);

      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(consoleError).toHaveBeenCalled();
      
      consoleError.mockRestore();
    });

    it('handles missing images', () => {
      const projectWithoutImage = { ...mockProject, image: undefined };
      (useParams as any).mockReturnValue({ projectId: projectWithoutImage.id });

      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const fallbackImage = screen.getByRole('img');
      expect(fallbackImage).toHaveAttribute('src', '/api/placeholder/800/600');
    });
  });

  describe('Accessibility', () => {
    it('maintains proper heading hierarchy', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent(mockProject.title);
      
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('provides proper navigation landmarks', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('ensures images have alt text', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
      });
    });
  });
});