// src/test/userFlows.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App';
import { mockApiResponse } from '../test/utils';
import emailjs from '@emailjs/browser';

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
  send: vi.fn()
}));

describe('Core User Flows', () => {
  describe('Portfolio Browsing Flow', () => {
    it('completes portfolio browsing journey', async () => {
      const user = userEvent.setup();
      render(<App />);

      // Navigate to portfolio
      const portfolioLink = screen.getByRole('link', { name: /portfolio/i });
      await user.click(portfolioLink);
      
      // Verify portfolio page loaded
      expect(screen.getByText(/explore my projects/i)).toBeInTheDocument();

      // Filter projects
      const filterButton = screen.getByRole('button', { name: /development/i });
      await user.click(filterButton);
      
      // Verify filtered results
      const projectCards = screen.getAllByTestId('project-card');
      expect(projectCards.length).toBeGreaterThan(0);
      expect(projectCards[0]).toHaveTextContent(/development/i);

      // View project details
      await user.click(projectCards[0]);
      
      // Verify project detail page
      await waitFor(() => {
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
        expect(screen.getByText(/tech stack/i)).toBeInTheDocument();
      });
    });
  });

  describe('Contact Form Flow', () => {
    it('completes form submission successfully', async () => {
      const user = userEvent.setup();
      (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 200 });

      render(<App />);

      // Navigate to contact
      await user.click(screen.getByRole('link', { name: /contact/i }));

      // Fill form
      await user.type(screen.getByLabelText(/name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Test message content');

      // Submit form
      await user.click(screen.getByRole('button', { name: /send/i }));

      // Verify success message
      await waitFor(() => {
        expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
      });
    });
  });

  describe('Resume Flow', () => {
    it('views and downloads resume', async () => {
      const user = userEvent.setup();
      render(<App />);

      // Navigate to resume page
      await user.click(screen.getByRole('link', { name: /resume/i }));

      // Verify resume types displayed
      expect(screen.getByText(/software development/i)).toBeInTheDocument();
      expect(screen.getByText(/instructional design/i)).toBeInTheDocument();

      // Click view online for software resume
      await user.click(screen.getByRole('link', { name: /view software/i }));

      // Verify resume content
      expect(screen.getByText(/technical skills/i)).toBeInTheDocument();

      // Test download functionality
      const downloadLink = screen.getByRole('link', { name: /download pdf/i });
      expect(downloadLink).toHaveAttribute('href', expect.stringMatching(/\.pdf$/));
    });
  });
});