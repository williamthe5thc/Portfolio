//tests/components/layout/Navigation.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { siteConfig } from '@/content';

describe('Navigation', () => {
  beforeEach(() => {
    render(<Navigation />, { wrapper: MemoryRouter });
  });

  it('displays site author/brand', () => {
    expect(screen.getByText(siteConfig.author)).toBeInTheDocument();
  });

  describe('Desktop Navigation', () => {
    it('renders all navigation links', () => {
      const nav = screen.getByRole('navigation');
      expect(within(nav).getByText(/home/i)).toBeInTheDocument();
      expect(within(nav).getByText(/about/i)).toBeInTheDocument();
      expect(within(nav).getByText(/portfolio/i)).toBeInTheDocument();
      expect(within(nav).getByText(/contact/i)).toBeInTheDocument();
    });

    it('highlights current page', () => {
      const currentLink = screen.getByText(/home/i).closest('a');
      expect(currentLink).toHaveClass('text-primary-600');
    });

    it('shows hover effects on links', async () => {
      const user = userEvent.setup();
      const link = screen.getByText(/about/i).closest('a');
      
      await user.hover(link!);
      expect(link).toHaveClass('hover:text-primary-600');
    });
  });

  describe('Mobile Navigation', () => {
    it('shows menu button on mobile', () => {
      const menuButton = screen.getByLabelText(/toggle menu/i);
      expect(menuButton).toBeInTheDocument();
    });

    it('toggles mobile menu when clicked', async () => {
      const user = userEvent.setup();
      const menuButton = screen.getByLabelText(/toggle menu/i);

      // The mobile menu is rendered only while open, so its links are never
      // tabbable while hidden.
      expect(document.getElementById('mobile-menu')).toBeNull();

      await user.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      expect(document.getElementById('mobile-menu')).toBeInTheDocument();

      await user.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(document.getElementById('mobile-menu')).toBeNull();
    });

    it('closes menu when link is clicked', async () => {
      const user = userEvent.setup();
      const menuButton = screen.getByLabelText(/toggle menu/i);
      
      await user.click(menuButton);
      const mobileMenu = document.getElementById('mobile-menu')!;
      await user.click(within(mobileMenu).getByText(/about/i));
      
      expect(document.getElementById('mobile-menu')).toBeNull();
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Accessibility', () => {
    it('is keyboard navigable', async () => {
      const user = userEvent.setup();
      const nav = screen.getByRole('navigation');
      
      // The name links home first, then the page links in order.
      await user.tab();
      expect(within(nav).getByText(siteConfig.author)).toHaveFocus();

      await user.tab();
      expect(within(nav).getByText(/home/i)).toHaveFocus();
      
      await user.tab();
      expect(within(nav).getByText(/about/i)).toHaveFocus();
    });

    it('has correct ARIA labels', () => {
      const menuButton = screen.getByLabelText(/toggle menu/i);
      expect(menuButton).toHaveAttribute('aria-expanded');
    });
  });
});