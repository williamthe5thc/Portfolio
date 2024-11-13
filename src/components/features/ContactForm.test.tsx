// src/components/features/ContactForm.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';
import emailjs from '@emailjs/browser';

vi.mock('@emailjs/browser', () => ({
  send: vi.fn()
}));

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear(); // Reset rate limiting
  });

  describe('Form Submission', () => {
    it('submits form successfully', async () => {
      const user = userEvent.setup();
      (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 200 });

      render(<ContactForm />);

      // Fill out form
      await user.type(screen.getByLabelText(/name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Test message');

      // Submit form
      await user.click(screen.getByRole('button', { name: /send/i }));

      // Verify loading state
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();

      // Verify success state
      await waitFor(() => {
        expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
      });

      // Verify form reset
      expect(screen.getByLabelText(/name/i)).toHaveValue('');
    });

    it('handles submission errors', async () => {
      const user = userEvent.setup();
      (emailjs.send as jest.Mock).mockRejectedValueOnce(new Error('Failed to send'));

      render(<ContactForm />);

      // Fill and submit form
      await user.type(screen.getByLabelText(/name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Test message');
      await user.click(screen.getByRole('button', { name: /send/i }));

      // Verify error state
      await waitFor(() => {
        expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
      });

      // Verify form data preserved
      expect(screen.getByLabelText(/name/i)).toHaveValue('Test User');
    });
  });

  describe('Validation', () => {
    it('validates required fields', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Submit empty form
      await user.click(screen.getByRole('button', { name: /send/i }));

      // Verify error messages
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });

    it('validates email format', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/email/i), 'invalid-email');
      await user.tab(); // Trigger blur validation

      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
  });

  describe('Rate Limiting', () => {
    it('prevents rapid submissions', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Submit multiple times
      for (let i = 0; i < 3; i++) {
        await user.type(screen.getByLabelText(/name/i), `Test User ${i}`);
        await user.type(screen.getByLabelText(/email/i), 'test@example.com');
        await user.type(screen.getByLabelText(/message/i), 'Test message');
        await user.click(screen.getByRole('button', { name: /send/i }));
      }

      expect(screen.getByText(/please wait/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send/i })).toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('maintains focus management', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Navigate through form
      await user.tab(); // Focus first input
      expect(screen.getByLabelText(/name/i)).toHaveFocus();

      await user.tab(); // Focus email
      expect(screen.getByLabelText(/email/i)).toHaveFocus();

      await user.tab(); // Focus message
      expect(screen.getByLabelText(/message/i)).toHaveFocus();

      await user.tab(); // Focus submit button
      expect(screen.getByRole('button', { name: /send/i })).toHaveFocus();
    });
  });
});