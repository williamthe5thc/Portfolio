//tests/components/features/ContactForm.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/features/ContactForm';

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
  send: vi.fn()
}));

describe('ContactForm', () => {
  const mockSubmit = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset rate limiting
    localStorage.clear();
  });

  describe('Form Rendering', () => {
    it('renders all form fields', () => {
      render(<ContactForm onSubmit={mockSubmit} />);
      
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    });

    it('marks required fields', () => {
      render(<ContactForm onSubmit={mockSubmit} />);
      
      const required = screen.getAllByText('*');
      expect(required).toHaveLength(3); // name, email, message
    });

    it('shows field hints', () => {
      render(<ContactForm onSubmit={mockSubmit} />);
      
      expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
      expect(screen.getByText(/we'll never share your email/i)).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('validates required fields', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);
      
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });

    it('validates email format', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, 'invalid-email');
      await user.tab();
      
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });

    it('validates minimum message length', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, 'short');
      await user.tab();
      
      expect(screen.getByText(/message must be at least/i)).toBeInTheDocument();
    });
  });

  describe('Form Submission', () => {
    const validFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message that is long enough'
    };

    it('submits valid form data', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      // Fill form
      await user.type(screen.getByLabelText(/name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email/i), validFormData.email);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);
      
      // Submit form
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalledWith(validFormData);
      });
    });

    it('shows loading state during submission', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={() => new Promise(resolve => setTimeout(resolve, 1000))} />);
      
      // Fill and submit form
      await user.type(screen.getByLabelText(/name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email/i), validFormData.email);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();
    });

    it('shows success message after submission', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      // Fill and submit form
      await user.type(screen.getByLabelText(/name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email/i), validFormData.email);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      await waitFor(() => {
        expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
      });
    });

    it('handles submission errors', async () => {
      const user = userEvent.setup();
      const mockError = new Error('Submission failed');
      render(<ContactForm onSubmit={() => Promise.reject(mockError)} />);
      
      // Fill and submit form
      await user.type(screen.getByLabelText(/name/i), validFormData.name);
      await user.type(screen.getByLabelText(/email/i), validFormData.email);
      await user.type(screen.getByLabelText(/message/i), validFormData.message);
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      await waitFor(() => {
        expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
      });
    });
  });

  describe('Rate Limiting', () => {
    it('prevents multiple submissions within time window', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      // Submit multiple times
      for (let i = 0; i < 3; i++) {
        await user.type(screen.getByLabelText(/name/i), `John Doe ${i}`);
        await user.type(screen.getByLabelText(/email/i), 'john@example.com');
        await user.type(screen.getByLabelText(/message/i), 'Test message');
        await user.click(screen.getByRole('button', { name: /send/i }));
      }
      
      expect(screen.getByText(/please wait/i)).toBeIn
      /// this got split up by claude 
      
      describe('Rate Limiting', () => {
    it('prevents multiple submissions within time window', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      // Submit multiple times
      for (let i = 0; i < 3; i++) {
        await user.type(screen.getByLabelText(/name/i), `John Doe ${i}`);
        await user.type(screen.getByLabelText(/email/i), 'john@example.com');
        await user.type(screen.getByLabelText(/message/i), 'Test message');
        await user.click(screen.getByRole('button', { name: /send/i }));
      }
      
      expect(screen.getByText(/please wait before sending another message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send/i })).toBeDisabled();
    });

    it('resets rate limit after cooldown period', async () => {
      const user = userEvent.setup();
      vi.useFakeTimers();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      // Submit once
      await user.type(screen.getByLabelText(/name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Test message');
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      // Advance time past cooldown
      vi.advanceTimersByTime(60 * 60 * 1000); // 1 hour
      
      // Should be able to submit again
      expect(screen.getByRole('button', { name: /send/i })).not.toBeDisabled();
      
      vi.useRealTimers();
    });
  });

  describe('Form Reset', () => {
    it('resets form after successful submission', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      // Fill and submit form
      await user.type(screen.getByLabelText(/name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Test message');
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toHaveValue('');
        expect(screen.getByLabelText(/email/i)).toHaveValue('');
        expect(screen.getByLabelText(/message/i)).toHaveValue('');
      });
    });

    it('maintains form data after failed submission', async () => {
      const user = userEvent.setup();
      const mockError = new Error('Submission failed');
      render(<ContactForm onSubmit={() => Promise.reject(mockError)} />);
      
      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message'
      };
      
      // Fill and submit form
      await user.type(screen.getByLabelText(/name/i), formData.name);
      await user.type(screen.getByLabelText(/email/i), formData.email);
      await user.type(screen.getByLabelText(/message/i), formData.message);
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toHaveValue(formData.name);
        expect(screen.getByLabelText(/email/i)).toHaveValue(formData.email);
        expect(screen.getByLabelText(/message/i)).toHaveValue(formData.message);
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper field associations', () => {
      render(<ContactForm onSubmit={mockSubmit} />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      expect(nameInput).toHaveAttribute('aria-required', 'true');
      expect(emailInput).toHaveAttribute('aria-required', 'true');
      expect(messageInput).toHaveAttribute('aria-required', 'true');
    });

    it('announces validation errors to screen readers', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      const errors = screen.getAllByRole('alert');
      errors.forEach(error => {
        expect(error).toHaveAttribute('role', 'alert');
        expect(error).toHaveAttribute('aria-live', 'assertive');
      });
    });

    it('manages focus during submission', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      const submitButton = screen.getByRole('button', { name: /send/i });
      await user.click(submitButton);
      
      // Focus should move to first error field
      expect(screen.getByLabelText(/name/i)).toHaveFocus();
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      await user.tab(); // Name field
      expect(screen.getByLabelText(/name/i)).toHaveFocus();
      
      await user.tab(); // Email field
      expect(screen.getByLabelText(/email/i)).toHaveFocus();
      
      await user.tab(); // Message field
      expect(screen.getByLabelText(/message/i)).toHaveFocus();
      
      await user.tab(); // Submit button
      expect(screen.getByRole('button', { name: /send/i })).toHaveFocus();
    });
  });

  describe('Edge Cases', () => {
    it('handles long input gracefully', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      const longText = 'a'.repeat(1000);
      await user.type(screen.getByLabelText(/message/i), longText);
      
      expect(screen.getByLabelText(/message/i)).toHaveValue(longText);
    });

    it('prevents XSS attempts', async () => {
      const user = userEvent.setup();
      render(<ContactForm onSubmit={mockSubmit} />);
      
      const xssAttempt = '<script>alert("xss")</script>';
      await user.type(screen.getByLabelText(/message/i), xssAttempt);
      
      expect(screen.getByLabelText(/message/i)).toHaveValue(xssAttempt);
      expect(document.querySelector('script')).not.toBeInTheDocument();
    });

    it('handles network errors gracefully', async () => {
      const user = userEvent.setup();
      const networkError = new Error('Network error');
      render(<ContactForm onSubmit={() => Promise.reject(networkError)} />);
      
      // Fill and submit form
      await user.type(screen.getByLabelText(/name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email/i), 'john@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Test message');
      await user.click(screen.getByRole('button', { name: /send/i }));
      
      await waitFor(() => {
        expect(screen.getByText(/network error/i)).toBeInTheDocument();
      });
    });
  });
});