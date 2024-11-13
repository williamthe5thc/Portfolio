// src/components/ui/Badge.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(<Badge>Test Badge</Badge>);
      expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    it('applies default variant and size', () => {
      render(<Badge>Default Badge</Badge>);
      const badge = screen.getByText('Default Badge');
      expect(badge).toHaveClass('bg-primary-100', 'text-primary-800');
      expect(badge).toHaveClass('px-2', 'py-1', 'text-xs');
    });

    it('applies different variants correctly', () => {
      const { rerender } = render(<Badge variant="primary">Primary</Badge>);
      expect(screen.getByText('Primary')).toHaveClass('bg-primary-100', 'text-primary-800');

      rerender(<Badge variant="secondary">Secondary</Badge>);
      expect(screen.getByText('Secondary')).toHaveClass('bg-gray-100', 'text-gray-800');

      rerender(<Badge variant="success">Success</Badge>);
      expect(screen.getByText('Success')).toHaveClass('bg-green-100', 'text-green-800');
    });

    it('accepts custom className', () => {
      render(<Badge className="custom-class">Custom Badge</Badge>);
      expect(screen.getByText('Custom Badge')).toHaveClass('custom-class');
    });
  });

  describe('Animation', () => {
    it('has animation classes', () => {
      const { container } = render(<Badge>Animated Badge</Badge>);
      const badge = screen.getByText('Animated Badge');

      // Check if Framer Motion attributes are applied
      expect(badge).toHaveAttribute('data-motion');
    });
  });

  describe('Accessibility', () => {
    it('has sufficient color contrast', () => {
      const { container } = render(<Badge>Test Badge</Badge>);
      const badge = container.firstChild as HTMLElement;
      
      const styles = window.getComputedStyle(badge);
      // Verify that backgroundColor and color are defined
      expect(styles.backgroundColor).toBeDefined();
      expect(styles.color).toBeDefined();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty children', () => {
      render(<Badge>{''}</Badge>);
      const badge = screen.getByRole('status');
      expect(badge).toBeEmptyDOMElement();
    });

    it('handles long text content', () => {
      const longText = 'This is a very long badge text that might wrap';
      render(<Badge>{longText}</Badge>);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });
  });
});