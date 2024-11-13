//tests/pages/NotFoundPage.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFoundPage';

// Mock router hooks
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn()
}));

describe('NotFoundPage', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as any).mockReturnValue(mockNavigate);
  });

  describe('Page Structure', () => {
    it('renders 404 error message', () => {
      render(<NotFoundPage />);
      
      expect(screen.getByText('404')).toBeInTheDocument();
      expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    });

    it('displays error description', () => {
      render(<NotFoundPage />);
      
      expect(screen.getByText(/sorry, we couldn't find the page/i)).toBeInTheDocument();
    });

    it('shows navigation buttons', () => {
      render(<NotFoundPage />);
      
      expect(screen.getByText(/go back/i)).toBeInTheDocument();
      expect(screen.getByText(/return to home/i)).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('handles go back button click', async () => {
      const user = userEvent.setup();
      render(<NotFoundPage />);
      
      await user.click(screen.getByText(/go back/i));
      expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it('handles return home button click', async () => {
      const user = userEvent.setup();
      render(<NotFoundPage />);
      
      await user.click(screen.getByText(/return to home/i));
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  describe('Styling and Animation', () => {
    it('applies animation classes to content', () => {
      render(<NotFoundPage />);
      
      const content = screen.getByText('404').closest('div');
      expect(content).toHaveAttribute('data-animate');
    });

    it('has proper layout classes', () => {
      render(<NotFoundPage />);
      
      const mainContainer = screen.getByRole('main');
      expect(mainContainer).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center');
    });

    it('styles buttons distinctly', () => {
      render(<NotFoundPage />);
      
      const goBackButton = screen.getByText(/go back/i);
      const homeButton = screen.getByText(/return to home/i);
      
      expect(goBackButton).toHaveClass('bg-primary-600');
      expect(homeButton).toHaveClass('variant-outline');
    });
  });

  describe('SEO', () => {
    it('sets correct meta tags', () => {
      render(<NotFoundPage />);
      
      expect(document.title).toContain('404');
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription?.getAttribute('content')).toContain('page not found');
    });

    it('sets noindex meta tag', () => {
      render(<NotFoundPage />);
      
      const metaRobots = document.querySelector('meta[name="robots"]');
      expect(metaRobots?.getAttribute('content')).toBe('noindex, nofollow');
    });
  });

  describe('Accessibility', () => {
    it('maintains proper heading hierarchy', () => {
      render(<NotFoundPage />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('404');
      
      const h2 = screen.getByRole('heading', { level: 2 });
      expect(h2).toHaveTextContent('Page Not Found');
    });

    it('ensures buttons have accessible names', () => {
      render(<NotFoundPage />);
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });

    it('provides proper focus management', async () => {
      const user = userEvent.setup();
      render(<NotFoundPage />);
      
      await user.tab();
      expect(screen.getByText(/go back/i)).toHaveFocus();
      
      await user.tab();
      expect(screen.getByText(/return to home/i)).toHaveFocus();
    });
  });

  describe('Error Handling', () => {
    it('handles navigation errors gracefully', async () => {
      const mockNavigateError = vi.fn(() => {
        throw new Error('Navigation failed');
      });
      (useNavigate as any).mockReturnValue(mockNavigateError);
      
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
      const user = userEvent.setup();
      
      render(<NotFoundPage />);
      await user.click(screen.getByText(/go back/i));
      
      expect(consoleError).toHaveBeenCalled();
      consoleError.mockRestore();
    });
  });

  describe('Responsive Design', () => {
    it('maintains button layout on different screens', () => {
      render(<NotFoundPage />);
      
      const buttonContainer = screen.getByText(/go back/i).closest('div');
      expect(buttonContainer).toHaveClass('space-x-4');
    });

    it('ensures error message is centered', () => {
      render(<NotFoundPage />);
      
      const container = screen.getByText('404').closest('div');
      expect(container).toHaveClass('text-center');
    });
  });
});