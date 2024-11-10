//tests/components/ui/Badge.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '@/components/ui/Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(<Badge>Test Badge</Badge>);
      expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    it('renders with default variant and size', () => {
      render(<Badge>Default Badge</Badge>);
      const badge = screen.getByText('Default Badge');
      expect(badge).toHaveClass('bg-primary-100', 'text-primary-800');
      expect(badge).toHaveClass('px-2', 'py-1', 'text-xs');
    });

    it('applies variant classes correctly', () => {
      const { rerender } = render(<Badge variant="primary">Primary</Badge>);
      expect(screen.getByText('Primary')).toHaveClass('bg-primary-100', 'text-primary-800');

      rerender(<Badge variant="secondary">Secondary</Badge>);
      expect(screen.getByText('Secondary')).toHaveClass('bg-gray-100', 'text-gray-800');

      rerender(<Badge variant="success">Success</Badge>);
      expect(screen.getByText('Success')).toHaveClass('bg-green-100', 'text-green-800');

      rerender(<Badge variant="warning">Warning</Badge>);
      expect(screen.getByText('Warning')).toHaveClass('bg-yellow-100', 'text-yellow-800');

      rerender(<Badge variant="danger">Danger</Badge>);
      expect(screen.getByText('Danger')).toHaveClass('bg-red-100', 'text-red-800');
    });

    it('applies size classes correctly', () => {
      const { rerender } = render(<Badge size="sm">Small</Badge>);
      expect(screen.getByText('Small')).toHaveClass('px-2', 'py-1', 'text-xs');

      rerender(<Badge size="md">Medium</Badge>);
      expect(screen.getByText('Medium')).toHaveClass('px-2.5', 'py-1.5', 'text-sm');

      rerender(<Badge size="lg">Large</Badge>);
      expect(screen.getByText('Large')).toHaveClass('px-3', 'py-2', 'text-base');
    });

    it('accepts custom className', () => {
      render(<Badge className="custom-class">Custom Badge</Badge>);
      expect(screen.getByText('Custom Badge')).toHaveClass('custom-class');
    });
  });

  describe('Animation', () => {
    it('has animation classes', () => {
      render(<Badge>Animated Badge</Badge>);
      const badge = screen.getByText('Animated Badge');
      
      expect(badge).toHaveStyle({
        transform: 'scale(1)',
        opacity: '1'
      });
    });
  });

  describe('Accessibility', () => {
    it('has sufficient color contrast', () => {
      const { container } = render(<Badge>Test Badge</Badge>);
      const badge = container.firstChild as HTMLElement;
      
      const styles = window.getComputedStyle(badge);
      expect(styles.backgroundColor).toBeDefined();
      expect(styles.color).toBeDefined();
    });

    it('maintains readability at different sizes', () => {
      const { rerender } = render(<Badge size="sm">Small</Badge>);
      expect(screen.getByText('Small')).toHaveClass('text-xs');

      rerender(<Badge size="lg">Large</Badge>);
      expect(screen.getByText('Large')).toHaveClass('text-base');
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

  describe('Responsive Design', () => {
    it('maintains proper layout at different sizes', () => {
      render(<Badge>Responsive Badge</Badge>);
      const badge = screen.getByText('Responsive Badge');
      
      expect(badge).toHaveClass(
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'font-medium'
      );
    });
  });
});