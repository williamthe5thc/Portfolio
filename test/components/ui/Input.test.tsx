//tests/components/ui/Input.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';

describe('Input', () => {
  describe('Rendering', () => {
    it('renders correctly with label', () => {
      render(<Input label="Email" name="email" />);
      
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'email');
    });

    it('renders with placeholder', () => {
      render(<Input placeholder="Enter your email" />);
      
      expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    });

    it('renders with icon', () => {
      render(<Input icon={Mail} />);
      
      expect(document.querySelector('svg')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveClass('pl-10');
    });

    it('renders error state', () => {
      render(<Input error="Invalid email" />);
      
      expect(screen.getByText('Invalid email')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveClass('border-accent-red');
      expect(document.querySelector('.text-accent-red')).toBeInTheDocument();
    });

    it('renders hint text', () => {
      render(<Input hint="Must be a valid email address" />);
      
      expect(screen.getByText('Must be a valid email address')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('handles value changes', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<Input onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'test@example.com');
      
      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('test@example.com');
    });

    it('handles blur events', async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      
      render(<Input onBlur={handleBlur} />);
      const input = screen.getByRole('textbox');
      
      await user.click(input);
      await user.tab();
      
      expect(handleBlur).toHaveBeenCalled();
    });

    it('handles disabled state', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<Input disabled onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, 'test');
      
      expect(handleChange).not.toHaveBeenCalled();
      expect(input).toBeDisabled();
    });
  });

  describe('Validation', () => {
    it('shows required indicator when required', () => {
      render(<Input label="Email" required />);
      
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('displays error state correctly', () => {
      render(
        <Input 
          label="Email"
          error="Invalid email format"
          value="invalid-email"
        />
      );
      
      expect(screen.getByText('Invalid email format')).toHaveClass('text-accent-red');
      expect(screen.getByRole('textbox')).toHaveClass('border-accent-red');
    });

    it('handles invalid input gracefully', async () => {
      const user = userEvent.setup();
      render(<Input type="email" required />);
      
      const input = screen.getByRole('textbox');
      await user.type(input, 'invalid-email');
      await user.tab();
      
      expect(input).toBeInvalid();
    });
  });

  describe('Focus Behavior', () => {
    it('shows focus styles when focused', async () => {
      const user = userEvent.setup();
      render(<Input />);
      
      const input = screen.getByRole('textbox');
      await user.click(input);
      
      expect(input).toHaveFocus();
      expect(input).toHaveClass('focus:ring-2', 'focus:ring-primary-500/50');
    });
  });

  describe('Accessibility', () => {
    it('maintains label association', () => {
      render(<Input label="Email" id="email" />);
      
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('id', 'email');
    });

    it('announces error messages to screen readers', () => {
      render(<Input error="Required field" aria-describedby="error-message" />);
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByText('Required field')).toHaveAttribute('id', 'error-message');
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined onChange handler', async () => {
      const user = userEvent.setup();
      render(<Input />);
      
      const input = screen.getByRole('textbox');
      await user.type(input, 'test');
      
      expect(input).toHaveValue('test');
    });

    it('handles special characters in input', async () => {
      const user = userEvent.setup();
      render(<Input />);
      
      const input = screen.getByRole('textbox');
      await user.type(input, '!@#$%^&*()');
      
      expect(input).toHaveValue('!@#$%^&*()');
    });

    it('handles extremely long input values', async () => {
      const user = userEvent.setup();
      const longString = 'a'.repeat(1000);
      
      render(<Input />);
      const input = screen.getByRole('textbox');
      
      await user.type(input, longString);
      expect(input).toHaveValue(longString);
    });
  });
});