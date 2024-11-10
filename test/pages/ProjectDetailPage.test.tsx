//tests/pages/ProjectDetailPage.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useParams, useNavigate } from 'react-router-dom';
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
      render(<ProjectDetailPage />);
      
      expect(screen.getByText(mockProject.title)).toBeInTheDocument();
      expect(screen.getByText(mockProject.description)).toBeInTheDocument();
      if (mockProject.longDescription) {
        expect(screen.getByText(mockProject.longDescription)).toBeInTheDocument();
      }
    });

    it('redirects to portfolio on invalid project ID', () => {
      (useParams as any).mockReturnValue({ projectId: 'invalid-id' });
      render(<ProjectDetailPage />);
      
      expect(mockNavigate).toHaveBeenCalledWith('/portfolio', { replace: true });
    });

    it('handles undefined project ID', () => {
      (useParams as any).mockReturnValue({ projectId: undefined });
      render(<ProjectDetailPage />);
      
      expect(mockNavigate).toHaveBeenCalledWith('/portfolio', { replace: true });
    });
  });

  describe('Project Content Display', () => {
    it('displays project metadata', () => {
      render(<ProjectDetailPage />);
      
      expect(screen.getByText(mockProject.category)).toBeInTheDocument();
      expect(screen.getByText(mockProject.date)).toBeInTheDocument();
      expect(screen.getByText(mockProject.status)).toBeInTheDocument();
    });

    it('shows all project tags', () => {
      render(<ProjectDetailPage />);
      
      mockProject.tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    it('displays project image', () => {
      render(<ProjectDetailPage />);
      
      const image = screen.getByAltText(mockProject.title);
      expect(image).toHaveAttribute('src', mockProject.image);
    });

    it('renders challenges section when available', () => {
      if (mockProject.challenges) {
        render(<ProjectDetailPage />);
        
        mockProject.challenges.forEach(challenge => {
          expect(screen.getByText(challenge)).toBeInTheDocument();
        });
      }
    });

    it('renders solutions section when available', () => {
      if (mockProject.solutions) {
        render(<ProjectDetailPage />);
        
        mockProject.solutions.forEach(solution => {
          expect(screen.getByText(solution)).toBeInTheDocument();
        });
      }
    });
  });

  describe('Navigation', () => {
    it('provides back to portfolio button', async () => {
      const user = userEvent.setup();
      render(<ProjectDetailPage />);
      
      const backButton = screen.getByText(/back to portfolio/i);
      await user.click(backButton);
      
      expect(mockNavigate).toHaveBeenCalledWith('/portfolio');
    });

    it('shows external link for projects with URLs', () => {
      const projectWithUrl = {
        ...mockProject,
        projectUrl: 'https://example.com'
      };
      
      (useParams as any).mockReturnValue({ projectId: projectWithUrl.id });
      render(<ProjectDetailPage />);
      
      const externalLink = screen.getByText(/view live project/i);
      expect(externalLink).toHaveAttribute('href', projectWithUrl.projectUrl);
      expect(externalLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Layout', () => {
    it('uses responsive grid layout', () => {
      render(<ProjectDetailPage />);
      
      const grid = screen.getByRole('main').firstChild;
      expect(grid).toHaveClass('grid', 'md:grid-cols-3', 'gap-8');
    });

    it('maintains consistent card heights', () => {
      render(<ProjectDetailPage />);
      
      const cards = screen.getAllByRole('article');
      cards.forEach(card => {
        expect(card).toHaveClass('h-full');
      });
    });
  });

  describe('SEO', () => {
    it('sets correct meta tags', () => {
      render(<ProjectDetailPage />);
      
      expect(document.title).toContain(mockProject.title);
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription?.getAttribute('content')).toBe(mockProject.description);
    });
  });

  describe('Accessibility', () => {
    it('provides proper heading hierarchy', () => {
      render(<ProjectDetailPage />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent(mockProject.title);
      
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('ensures images have alt text', () => {
      render(<ProjectDetailPage />);
      
      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
      });
    });

    it('provides proper navigation landmarks', () => {
      render(<ProjectDetailPage />);
      
      expect(document.querySelector('main')).toBeInTheDocument();
      expect(document.querySelector('nav')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('handles missing project data gracefully', () => {
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
      (useParams as any).mockReturnValue({ projectId: undefined });
      
      render(<ProjectDetailPage />);
      
      expect(mockNavigate).toHaveBeenCalledWith('/portfolio', { replace: true });
      expect(consoleError).toHaveBeenCalled();
      
      consoleError.mockRestore();
    });

    it('handles navigation errors', () => {
      const mockNavigateError = vi.fn(() => {
        throw new Error('Navigation failed');
      });
      (useNavigate as any).mockReturnValue(mockNavigateError);
      
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
      render(<ProjectDetailPage />);
      
      expect(consoleError).toHaveBeenCalled();
      consoleError.mockRestore();
    });
  });
});