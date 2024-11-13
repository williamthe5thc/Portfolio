//tests/components/ui/FormField.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormField } from '@/components/ui/FormField';
import { Input } from '@/components/ui/Input';

describe('FormField', () => {
  describe('Rendering', () => {
    it('renders label when provided', () => {
      render(
        <FormField label="Test Label">
          <Input type="text" />
        </FormField>
      );
      
      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('renders error message when provided', () => {
      render(
        <FormField error="Test error">
          <Input type="text" />
        </FormField>
      );
      
      expect(screen.getByText('Test error')).toBeInTheDocument();
      expect(screen.getByText('Test error')).toHaveClass('text-accent-red');
    });

    it('renders children component', () => {
      render(
        <FormField>
          <Input type="text" placeholder="Test input" />
        </FormField>
      );
      
      expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
    });

    it('shows error icon when error present', () => {
      render(
        <FormField error="Error message">
          <Input type="text" />
        </FormField>
      );
      
      const errorIcon = document.querySelector('.text-accent-red');
      expect(errorIcon).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('associates label with input through htmlFor', () => {
      render(
        <FormField label="Test Label">
          <Input type="text" id="test-input" />
        </FormField>
      );
      
      const label = screen.getByText('Test Label');
      expect(label).toHaveAttribute('for', 'test-input');
    });

    it('announces error messages to screen readers', () => {
      render(
        <FormField error="Error message">
          <Input type="text" aria-describedby="error-message" />
        </FormField>
      );
      
      const errorMessage = screen.getByText('Error message');
      expect(errorMessage).toHaveAttribute('id', 'error-message');
    });
  });

  describe('Layout and Styling', () => {
    it('maintains proper spacing between elements', () => {
      render(
        <FormField label="Test Label" error="Test error">
          <Input type="text" />
        </FormField>
      );
      
      const formField = screen.getByText('Test Label').closest('div');
      expect(formField).toHaveClass('space-y-2');
    });

    it('applies custom className when provided', () => {
      render(
        <FormField className="custom-class">
          <Input type="text" />
        </FormField>
      );
      
      const formField = screen.getByRole('textbox').closest('div');
      expect(formField?.parentElement).toHaveClass('custom-class');
    });
  });

  describe('Error States', () => {
    it('applies error styles to child input', () => {
      render(
        <FormField error="Error message">
          <Input type="text" />
        </FormField>
      );
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('border-accent-red');
    });

    it('animates error message appearance', () => {
      render(
        <FormField error="Error message">
          <Input type="text" />
        </FormField>
      );
      
      const errorMessage = screen.getByText('Error message');
      expect(errorMessage.parentElement).toHaveAttribute('data-animate');
    });
  });
});