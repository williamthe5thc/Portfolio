//navigation.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';

// Mock useLocation
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useLocation: vi.fn()
}));

describe('Navigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useLocation as jest.Mock).mockReturnValue({ pathname: '/' });
  });

  describe('Desktop Navigation', () => {
    it('renders all navigation links', () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/about/i)).toBeInTheDocument();
      expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
      expect(screen.getByText(/contact/i)).toBeInTheDocument();
    });

    it('highlights active link', () => {
      (useLocation as jest.Mock).mockReturnValue({ pathname: '/about' });
      
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const activeLink = screen.getByText(/about/i).closest('a');
      expect(activeLink).toHaveClass('text-primary-600', 'bg-primary-50');
    });

    it('animates link hover', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const link = screen.getByText(/about/i).closest('a');
      await user.hover(link!);
      
      expect(link).toHaveStyle('transform: scale(1.05)');
    });
  });

  describe('Mobile Navigation', () => {
    it('toggles mobile menu', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const menuButton = screen.getByLabelText(/toggle menu/i);
      await user.click(menuButton);
      
      expect(screen.getByRole('navigation')).toHaveClass('md:hidden');

      await user.click(menuButton);
      expect(screen.getByRole('navigation')).not.toHaveClass('md:hidden');
    });

    it('closes menu when link is clicked', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      // Open menu
      await user.click(screen.getByLabelText(/toggle menu/i));
      
      // Click link
      await user.click(screen.getByText(/about/i));
      
      expect(screen.getByRole('navigation')).not.toHaveClass('md:hidden');
    });

    it('animates menu transitions', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const menuButton = screen.getByLabelText(/toggle menu/i);
      await user.click(menuButton);

      const menu = screen.getByRole('navigation');
      expect(menu).toHaveAttribute('data-animate');
    });
  });

  describe('Accessibility', () => {
    it('provides keyboard navigation', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      await user.tab();
      expect(screen.getByText(/home/i)).toHaveFocus();

      await user.tab();
      expect(screen.getByText(/about/i)).toHaveFocus();
    });

    it('handles mobile menu with keyboard', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      await user.tab();
      await user.keyboard('{Enter}');
      
      expect(screen.getByRole('navigation')).toHaveClass('md:hidden');
    });

    it('provides ARIA attributes', () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const menuButton = screen.getByLabelText(/toggle menu/i);
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    });
  });

  describe('Responsive Behavior', () => {
    it('shows mobile menu button on small screens', () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      expect(screen.getByLabelText(/toggle menu/i)).toHaveClass('md:hidden');
    });

    it('shows desktop menu on larger screens', () => {
      render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );

      const desktopMenu = screen.getByRole('navigation');
      expect(desktopMenu).toHaveClass('hidden', 'md:flex');
    });
  });
});