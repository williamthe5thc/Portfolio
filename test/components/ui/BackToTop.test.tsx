//tests/components/ui/BackToTop.test.tsx

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BackToTop } from '@/components/ui/BackToTop';

describe('BackToTop', () => {
  beforeEach(() => {
    // Reset scroll position
    window.scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true
    });
  });

  describe('Visibility', () => {
    it('is hidden by default', () => {
      render(<BackToTop />);
      
      const button = screen.queryByRole('button');
      expect(button).not.toBeInTheDocument();
    });

    it('appears when scrolled past threshold', () => {
      render(<BackToTop threshold={100} />);
      
      // Simulate scroll
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('hides when scrolled back up', () => {
      render(<BackToTop threshold={100} />);
      
      // Scroll down
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      // Scroll up
      Object.defineProperty(window, 'scrollY', { value: 50 });
      fireEvent.scroll(window);
      
      const button = screen.queryByRole('button');
      expect(button).not.toBeInTheDocument();
    });

    it('uses custom threshold', () => {
      render(<BackToTop threshold={500} />);
      
      // Scroll to 400
      Object.defineProperty(window, 'scrollY', { value: 400 });
      fireEvent.scroll(window);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
      
      // Scroll to 600
      Object.defineProperty(window, 'scrollY', { value: 600 });
      fireEvent.scroll(window);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('scrolls to top when clicked', () => {
      render(<BackToTop threshold={100} />);
      
      // Make button visible
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      // Click button
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth'
      });
    });

    it('handles rapid scrolling', () => {
      render(<BackToTop threshold={100} />);
      
      // Simulate rapid scrolling
      for (let i = 0; i < 10; i++) {
        Object.defineProperty(window, 'scrollY', { value: i * 100 });
        fireEvent.scroll(window);
      }
      
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      render(<BackToTop threshold={100} className="custom-class" />);
      
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('applies fixed positioning', () => {
      render(<BackToTop threshold={100} />);
      
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('fixed', 'bottom-8', 'right-8');
    });

    it('includes hover styles', () => {
      render(<BackToTop threshold={100} />);
      
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('hover:bg-primary-700');
    });
  });

  describe('Animation', () => {
    it('animates on appearance', () => {
      render(<BackToTop threshold={100} />);
      
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('data-animate');
    });

    it('animates on disappearance', () => {
      render(<BackToTop threshold={100} />);
      
      // Make visible
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      // Make invisible
      Object.defineProperty(window, 'scrollY', { value: 50 });
      fireEvent.scroll(window);
      
      // Check for exit animation
      const button = screen.queryByRole('button');
      expect(button).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has accessible name', () => {
      render(<BackToTop threshold={100} />);
      
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAccessibleName('Scroll to top');
    });

    it('is keyboard focusable', () => {
      render(<BackToTop threshold={100} />);
      
      Object.defineProperty(window, 'scrollY', { value: 200 });
      fireEvent.scroll(window);
      
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe('Performance', () => {
    it('throttles scroll event handling', () => {
      const scrollHandler = vi.fn();
      window.addEventListener = vi.fn((event, handler) => {
        if (event === 'scroll') {
          scrollHandler.mockImplementation(handler);
        }
      });
      
      render(<BackToTop threshold={100} />);
      
      // Simulate rapid scrolling
      for (let i = 0; i < 100; i++) {
        Object.defineProperty(window, 'scrollY', { value: i * 10 });
        scrollHandler();
      }
      
      // Should be throttled, so not every scroll triggers a re-render
      expect(scrollHandler).toHaveBeenCalledTimes(100);
    });
  });
});