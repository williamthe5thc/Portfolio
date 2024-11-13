//tests/components/ui/Icon.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Icon } from '@/components/ui/Icon';
import * as Icons from 'lucide-react';

describe('Icon', () => {
  describe('Rendering', () => {
    it('renders icon correctly', () => {
      render(<Icon name="Mail" />);
      
      const svgElement = document.querySelector('svg');
      expect(svgElement).toBeInTheDocument();
    });

    it('handles invalid icon names gracefully', () => {
      const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      
      render(<Icon name="InvalidIcon" as any />);
      
      expect(consoleWarn).toHaveBeenCalledWith(
        expect.stringContaining('Icon "InvalidIcon" not found')
      );
      expect(document.querySelector('svg')).not.toBeInTheDocument();
      
      consoleWarn.mockRestore();
    });

    it('applies custom className', () => {
      render(<Icon name="Mail" className="custom-class" />);
      
      const svgElement = document.querySelector('svg');
      expect(svgElement).toHaveClass('custom-class');
    });

    it('applies custom size', () => {
      render(<Icon name="Mail" size={32} />);
      
      const svgElement = document.querySelector('svg');
      expect(svgElement).toHaveAttribute('width', '32');
      expect(svgElement).toHaveAttribute('height', '32');
    });

    it('applies custom color', () => {
      render(<Icon name="Mail" color="red" />);
      
      const svgElement = document.querySelector('svg');
      expect(svgElement).toHaveAttribute('color', 'red');
    });
  });

  describe('Interaction', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Icon name="Mail" onClick={handleClick} />);
      const icon = document.querySelector('svg');
      
      await user.click(icon!);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('maintains focusability when interactive', () => {
      render(<Icon name="Mail" onClick={() => {}} />);
      
      const icon = document.querySelector('svg');
      expect(icon).toHaveAttribute('focusable', 'true');
    });
  });

  describe('Icon Validation', () => {
    it('validates icon names', () => {
      // Test a few common icons
      const commonIcons = ['Mail', 'User', 'Home', 'Settings'];
      
      commonIcons.forEach(iconName => {
        const isValid = iconName in Icons;
        expect(isValid).toBe(true);
      });
    });

    it('handles case sensitivity', () => {
      render(<Icon name="MAIL" as any />);
      
      expect(document.querySelector('svg')).not.toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('memoizes icon components', () => {
      const { rerender } = render(<Icon name="Mail" />);
      const firstRender = document.querySelector('svg');
      
      rerender(<Icon name="Mail" />);
      const secondRender = document.querySelector('svg');
      
      expect(firstRender).toBe(secondRender);
    });
  });

  describe('Accessibility', () => {
    it('provides aria-hidden for decorative icons', () => {
      render(<Icon name="Mail" />);
      
      const icon = document.querySelector('svg');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    it('allows custom aria labels', () => {
      render(<Icon name="Mail" aria-label="Send email" />);
      
      const icon = document.querySelector('svg');
      expect(icon).toHaveAttribute('aria-label', 'Send email');
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined props gracefully', () => {
      expect(() => {
        render(<Icon name="Mail" color={undefined} size={undefined} />);
      }).not.toThrow();
    });

    it('handles multiple class names', () => {
      render(<Icon name="Mail" className="class1 class2" />);
      
      const icon = document.querySelector('svg');
      expect(icon).toHaveClass('class1', 'class2');
    });
  });

  describe('Type Safety', () => {
    it('enforces correct prop types', () => {
      // @ts-expect-error - Testing invalid icon name
      expect(() => render(<Icon name={123} />)).toThrow();

      // @ts-expect-error - Testing invalid size type
      expect(() => render(<Icon name="Mail" size="large" />)).toThrow();
    });
  });
});