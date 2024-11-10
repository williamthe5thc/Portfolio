//tests/components/layout/Navigation.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navigation } from '@/components/layout/Navigation';
import { siteConfig } from '@/content';

describe('Navigation', () => {
  beforeEach(() => {
    render(<Navigation />);
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

      await user.click(menuButton);
      expect(screen.getByRole('navigation')).toHaveClass('md:hidden');

      await user.click(menuButton);
      expect(screen.getByRole('navigation')).not.toHaveClass('md:hidden');
    });

    it('closes menu when link is clicked', async () => {
      const user = userEvent.setup();
      const menuButton = screen.getByLabelText(/toggle menu/i);
      
      await user.click(menuButton);
      await user.click(screen.getByText(/about/i));
      
      expect(screen.getByRole('navigation')).not.toHaveClass('md:hidden');
    });
  });

  describe('Accessibility', () => {
    it('is keyboard navigable', async () => {
      const user = userEvent.setup();
      const nav = screen.getByRole('navigation');
      
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