//tests/components/features/ContactForm.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/features/contact/ContactForm';
import { mockUser } from '../../helpers';

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn().mockResolvedValue({ status: 200 })
  }
}));

describe('ContactForm', () => {
  it('renders form fields correctly', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('handles form submission successfully', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill out form
    await user.type(screen.getByLabelText(/name/i), mockUser.name);
    await user.type(screen.getByLabelText(/email/i), mockUser.email);
    await user.type(screen.getByLabelText(/message/i), mockUser.message);

    // Submit form
    await user.click(screen.getByRole('button', { name: /send/i }));

    // Check success message
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Submit without filling form
    await user.click(screen.getByRole('button', { name: /send/i }));

    // Check error messages
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Enter invalid email
    await user.type(screen.getByLabelText(/email/i), 'invalid-email');
    
    // Move focus away to trigger validation
    await user.tab();

    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
  });
});