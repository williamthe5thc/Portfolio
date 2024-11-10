//tests/components/ui/TextArea.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from '@/components/ui/TextArea';
import { AlertCircle } from 'lucide-react';

describe('TextArea', () => {
  describe('Rendering', () => {
    it('renders correctly with label', () => {
      render(<TextArea label="Message" name="message" />);
      
      expect(screen.getByLabelText('Message')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute('name', 'message');
    });

    it('renders with placeholder', () => {
      render(<TextArea placeholder="Enter your message" />);
      
      expect(screen.getByPlaceholderText('Enter your message')).toBeInTheDocument();
    });

    it('displays error message', () => {
      render(<TextArea error="Required field" />);
      
      expect(screen.getByText('Required field')).toBeInTheDocument();
      expect(screen.getByText('Required field')).toHaveClass('text-accent-red');
    });

    it('shows error icon when error exists', () => {
      render(<TextArea error="Error message" />);
      
      const alertIcon = screen.getByTestId('error-icon');
      expect(alertIcon).toBeInTheDocument();
      expect(alertIcon.querySelector('svg')).toHaveClass('text-accent-red');
    });

    it('displays hint text', () => {
      render(<TextArea hint="Maximum 500 characters" />);
      
      expect(screen.getByText('Maximum 500 characters')).toBeInTheDocument();
      expect(screen.getByText('Maximum 500 characters')).toHaveClass('text-text-secondary');
    });
  });

  describe('Interaction', () => {
    it('handles value changes', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      
      render(<TextArea onChange={handleChange} />);
      const textarea = screen.getByRole('textbox');
      
      await user.type(textarea, 'Hello World');
      
      expect(handleChange).toHaveBeenCalledTimes(11); // Once for each character
      expect(textarea).toHaveValue('Hello World');
    });

    it('handles blur events', async () => {
      const handleBlur = vi.fn();
      const user = userEvent.setup();
      
      render(<TextArea onBlur={handleBlur} />);
      const textarea = screen.getByRole('textbox');
      
      await user.click(textarea);
      await user.tab();
      
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('respects disabled state', () => {
      render(<TextArea disabled />);
      
      expect(screen.getByRole('textbox')).toBeDisabled();
      expect(screen.getByRole('textbox')).toHaveClass('bg-gray-100', 'cursor-not-allowed');
    });

    it('handles rows prop', () => {
      render(<TextArea rows={5} />);
      
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
    });
  });

  describe('Validation', () => {
    it('shows required indicator when required', () => {
      render(<TextArea label="Message" required />);
      
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('displays error state styling', () => {
      render(<TextArea error="Invalid input" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('border-accent-red');
      expect(textarea).toHaveClass('focus:ring-accent-red/50');
    });

    it('handles form validation', async () => {
      const user = userEvent.setup();
      render(<TextArea required minLength={10} />);
      
      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'Short');
      await user.tab();
      
      expect(textarea).toBeInvalid();
    });
  });

  describe('Focus Management', () => {
    it('shows focus styles', async () => {
      const user = userEvent.setup();
      render(<TextArea />);
      
      const textarea = screen.getByRole('textbox');
      await user.click(textarea);
      
      expect(textarea).toHaveFocus();
      expect(textarea).toHaveClass('focus:ring-2', 'focus:ring-primary-500/50');
    });

    it('maintains focus after error', async () => {
      const user = userEvent.setup();
      render(<TextArea error="Error message" />);
      
      const textarea = screen.getByRole('textbox');
      await user.click(textarea);
      
      expect(textarea).toHaveFocus();
    });
  });

  describe('Accessibility', () => {
    it('maintains label association', () => {
      render(<TextArea label="Message" id="message" />);
      
      const textarea = screen.getByLabelText('Message');
      expect(textarea).toHaveAttribute('id', 'message');
    });

    it('announces error messages', () => {
      render(<TextArea error="Required field" aria-describedby="error-message" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByText('Required field')).toHaveAttribute('id', 'error-message');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty values', async () => {
      const user = userEvent.setup();
      render(<TextArea />);
      
      const textarea = screen.getByRole('textbox');
      await user.type(textarea, ' ');
      await user.tab();
      
      expect(textarea).toHaveValue(' ');
    });

    it('handles long input gracefully', async () => {
      const user = userEvent.setup();
      render(<TextArea />);
      
      const textarea = screen.getByRole('textbox');
      const longText = 'a'.repeat(1000);
      
      await user.type(textarea, longText);
      expect(textarea).toHaveValue(longText);
    });

    it('handles special characters', async () => {
      const user = userEvent.setup();
      render(<TextArea />);
      
      const textarea = screen.getByRole('textbox');
      const specialChars = '!@#$%^&*()_+{}|:"<>?';
      
      await user.type(textarea, specialChars);
      expect(textarea).toHaveValue(specialChars);
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      render(<TextArea className="custom-class" />);
      
      expect(screen.getByRole('textbox')).toHaveClass('custom-class');
    });

    it('maintains proper spacing', () => {
      render(<TextArea label="Message" error="Error" hint="Hint" />);
      
      const container = screen.getByRole('textbox').closest('div');
      expect(container?.parentElement).toHaveClass('space-y-2');
    });
  });
});