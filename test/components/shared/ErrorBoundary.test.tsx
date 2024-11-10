//tests/components/shared/ErrorBoundary.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';

// Component that throws an error
const ThrowError = ({ shouldThrow = false }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Normal Component</div>;
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Normal Rendering', () => {
    it('renders children when no error occurs', () => {
      render(
        <ErrorBoundary>
          <div>Test Content</div>
        </ErrorBoundary>
      );
      
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders multiple children correctly', () => {
      render(
        <ErrorBoundary>
          <div>First Child</div>
          <div>Second Child</div>
        </ErrorBoundary>
      );
      
      expect(screen.getByText('First Child')).toBeInTheDocument();
      expect(screen.getByText('Second Child')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('displays error UI when error occurs', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /reload page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /go home/i })).toBeInTheDocument();
    });

    it('calls onError prop when error occurs', () => {
      const handleError = vi.fn();
      
      render(
        <ErrorBoundary onError={handleError}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(handleError).toHaveBeenCalledWith(
        expect.any(Error),
        expect.any(Object)
      );
    });

    it('renders custom fallback if provided', () => {
      const CustomFallback = () => <div>Custom Error UI</div>;
      
      render(
        <ErrorBoundary fallback={<CustomFallback />}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(screen.getByText('Custom Error UI')).toBeInTheDocument();
    });
  });

  describe('Recovery Actions', () => {
    it('handles reload action', async () => {
      const user = userEvent.setup();
      const reloadSpy = vi.spyOn(window.location, 'reload');
      
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const reloadButton = screen.getByRole('button', { name: /reload page/i });
      await user.click(reloadButton);
      
      expect(reloadSpy).toHaveBeenCalled();
    });

    it('handles go home action', async () => {
      const user = userEvent.setup();
      const hrefSpy = vi.spyOn(window.location, 'href', 'set');
      
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const homeButton = screen.getByRole('button', { name: /go home/i });
      await user.click(homeButton);
      
      expect(hrefSpy).toHaveBeenCalledWith('/Portfolio/index.html');
    });
  });

  describe('Development Features', () => {
    it('shows error details in development mode', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';
      
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(screen.getByText(/error details/i)).toBeInTheDocument();
      
      process.env.NODE_ENV = originalEnv;
    });

    it('hides error details in production mode', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'production';
      
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(screen.queryByText(/error details/i)).not.toBeInTheDocument();
      
      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('Accessibility', () => {
    it('maintains focus management', async () => {
      const user = userEvent.setup();
      
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      await user.tab();
      expect(screen.getByRole('button', { name: /reload page/i })).toHaveFocus();
      
      await user.tab();
      expect(screen.getByRole('button', { name: /go home/i })).toHaveFocus();
    });

    it('provides proper ARIA labels', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });
  });

  describe('Styling', () => {
    it('applies error UI styling', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const errorContainer = screen.getByRole('alert');
      expect(errorContainer).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center');
    });

    it('styles action buttons distinctly', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      const reloadButton = screen.getByRole('button', { name: /reload page/i });
      const homeButton = screen.getByRole('button', { name: /go home/i });
      
      expect(reloadButton).toHaveClass('bg-primary-600');
      expect(homeButton).toHaveClass('variant-outline');
    });
  });
});