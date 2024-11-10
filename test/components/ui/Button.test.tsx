//tests/components/ui/Button.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/Button';
import { Mail } from 'lucide-react';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders with different variants', () => {
      const { rerender } = render(<Button variant="primary">Primary</Button>);
      expect(screen.getByText('Primary')).toHaveClass('bg-primary-600');

      rerender(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByText('Secondary')).toHaveClass('bg-secondary-600');

      rerender(<Button variant="outline">Outline</Button>);
      expect(screen.getByText('Outline')).toHaveClass('border-2');

      rerender(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByText('Ghost')).toHaveClass('text-primary-600');
    });

    it('renders with different sizes', () => {
      const { rerender } = render(<Button size="sm">Small</Button>);
      expect(screen.getByText('Small')).toHaveClass('px-3', 'py-1.5');

      rerender(<Button size="md">Medium</Button>);
      expect(screen.getByText('Medium')).toHaveClass('px-4', 'py-2');

      rerender(<Button size="lg">Large</Button>);
      expect(screen.getByText('Large')).toHaveClass('px-6', 'py-3');
    });

    it('renders with icon', () => {
      render(<Button icon={Mail}>Email</Button>);
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(document.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('calls onClick handler when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByText('Click me'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shows loading state', () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      expect(document.querySelector('.animate-spin')).toBeInTheDocument();
    });

    it('disables button when loading', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button isLoading onClick={handleClick}>Submit</Button>);
      await user.click(screen.getByText('Loading...'));
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('disables button when disabled prop is true', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button disabled onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByText('Click me'));
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Links', () => {
    it('renders as link when href is provided', () => {
      render(<Button href="/test">Link</Button>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/test');
    });

    it('opens in new tab for external links', () => {
      render(<Button href="https://example.com">External</Button>);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Accessibility', () => {
    it('maintains focus styles', async () => {
      const user = userEvent.setup();
      render(<Button>Focus me</Button>);
      
      await user.tab();
      expect(screen.getByText('Focus me')).toHaveFocus();
      expect(screen.getByText('Focus me')).toHaveClass('focus:ring-2');
    });

    it('provides loading state announcement', () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.getByText('Loading...')).toHaveAttribute('aria-busy', 'true');
    });

    it('maintains proper contrast ratios', () => {
      render(<Button variant="primary">Test</Button>);
      const button = screen.getByText('Test');
      expect(button).toHaveClass('text-white', 'bg-primary-600');
    });
  });
});
