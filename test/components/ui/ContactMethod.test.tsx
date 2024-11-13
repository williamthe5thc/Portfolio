//tests/components/ui/ContactMethod.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactMethod } from '@/components/ui/ContactMethod';

describe('ContactMethod', () => {
  const defaultProps = {
    icon: 'Mail',
    title: 'Email',
    content: 'test@example.com',
  };

  describe('Rendering', () => {
    it('renders basic content correctly', () => {
      render(<ContactMethod {...defaultProps} />);
      
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('test@example.com')).toBeInTheDocument();
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('renders different icons correctly', () => {
      const iconTypes = ['Mail', 'Phone', 'Linkedin', 'MapPin'] as const;
      
      iconTypes.forEach(iconType => {
        const { container, unmount } = render(
          <ContactMethod {...defaultProps} icon={iconType} />
        );
        expect(container.querySelector('svg')).toBeInTheDocument();
        unmount();
      });
    });

    it('applies custom color', () => {
      render(<ContactMethod {...defaultProps} color="text-red-600" />);
      const icon = document.querySelector('svg');
      expect(icon?.parentElement).toHaveClass('text-red-600');
    });

    it('applies custom className', () => {
      render(<ContactMethod {...defaultProps} className="custom-class" />);
      expect(screen.getByText('Email').closest('div')).toHaveClass('custom-class');
    });
  });

  describe('Link Behavior', () => {
    it('renders as link when link prop is provided', () => {
      render(
        <ContactMethod 
          {...defaultProps} 
          link="mailto:test@example.com" 
        />
      );
      
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'mailto:test@example.com');
    });

    it('handles click events on links', async () => {
      const user = userEvent.setup();
      render(
        <ContactMethod 
          {...defaultProps} 
          link="tel:+1234567890" 
        />
      );
      
      const link = screen.getByRole('link');
      await user.click(link);
      
      // Link should have been clicked
      expect(link).toHaveAttribute('href', 'tel:+1234567890');
    });

    it('does not render as link when no link prop', () => {
      render(<ContactMethod {...defaultProps} />);
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });

  describe('Animation', () => {
    it('applies hover animation to links', () => {
      render(
        <ContactMethod 
          {...defaultProps} 
          link="https://example.com" 
        />
      );
      
      const link = screen.getByRole('link');
      expect(link).toHaveClass('hover:opacity-80');
    });

    it('includes fade-in animation', () => {
      render(<ContactMethod {...defaultProps} />);
      const container = screen.getByText('Email').closest('.flex');
      expect(container).toHaveAttribute('data-animate');
    });
  });

  describe('Accessibility', () => {
    it('maintains text contrast for readability', () => {
      render(<ContactMethod {...defaultProps} />);
      
      const title = screen.getByText('Email');
      const content = screen.getByText('test@example.com');
      
      expect(title).toHaveClass('text-text-primary');
      expect(content.closest('p')).toBeTruthy();
    });

    it('provides proper link context when used as link', () => {
      render(
        <ContactMethod 
          {...defaultProps} 
          link="mailto:test@example.com" 
        />
      );
      
      const link = screen.getByRole('link');
      expect(link).toHaveAccessibleName();
    });
  });

  describe('Edge Cases', () => {
    it('handles long content gracefully', () => {
      const longContent = 'a'.repeat(100);
      render(
        <ContactMethod 
          {...defaultProps}
          content={longContent}
        />
      );
      
      expect(screen.getByText(longContent)).toBeInTheDocument();
    });

    it('handles empty content', () => {
      render(
        <ContactMethod 
          {...defaultProps}
          content=""
        />
      );
      
      expect(screen.getByText('Email')).toBeInTheDocument(); // Title should still show
    });

    it('handles malformed links', () => {
      render(
        <ContactMethod 
          {...defaultProps}
          link="invalid-link"
        />
      );
      
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'invalid-link');
    });
  });

  describe('Layout', () => {
    it('maintains proper spacing between elements', () => {
      render(<ContactMethod {...defaultProps} />);
      
      const container = screen.getByText('Email').closest('.flex');
      expect(container).toHaveClass('gap-4');
    });

    it('aligns icon properly with content', () => {
      render(<ContactMethod {...defaultProps} />);
      
      const icon = document.querySelector('svg');
      expect(icon?.parentElement).toHaveClass('mt-1');
    });
  });
});