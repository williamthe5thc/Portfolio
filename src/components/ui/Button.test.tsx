// src/components/ui/Button/Button.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '../../../test/utils/test-utils';
import userEvent from '@testing-library/user-event';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('applies variant styles correctly', () => {
      render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole('button')).toHaveClass('bg-primary-600');
    });

    it('applies custom className', () => {
      render(<Button className="custom-class">Custom</Button>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });
  });

  describe('Interactions', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles disabled state', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button disabled onClick={handleClick}>Disabled</Button>);
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(
        <Button 
          aria-label="Submit form"
          isLoading
        >
          Submit
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Submit form');
      expect(button).toBeDisabled();
    });

    it('is keyboard focusable when not disabled', async () => {
      const user = userEvent.setup();
      render(<Button>Focus me</Button>);
      
      await user.tab();
      expect(screen.getByRole('button')).toHaveFocus();
    });
  });

  describe('Loading State', () => {
    it('shows loading indicator', () => {
      render(<Button isLoading>Loading</Button>);
      
      expect(screen.getByRole('button')).toBeDisabled();
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });
});