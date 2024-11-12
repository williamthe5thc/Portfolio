import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';
import { projects } from '@/content';

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
  send: vi.fn().mockResolvedValue({ status: 200 })
}));

describe('Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Navigation Flow', () => {
    it('navigates through main sections', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      // Check home page
      expect(screen.getByText(/latest projects/i)).toBeInTheDocument();

      // Navigate to About
      await user.click(screen.getByText(/about/i));
      expect(screen.getByText(/my approach/i)).toBeInTheDocument();

      // Navigate to Portfolio
      await user.click(screen.getByText(/portfolio/i));
      expect(screen.getByText(/explore my projects/i)).toBeInTheDocument();

      // Navigate to Contact
      await user.click(screen.getByText(/contact/i));
      expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
    });

    it('handles mobile navigation menu', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      // Open mobile menu
      await user.click(screen.getByLabelText(/toggle menu/i));
      expect(screen.getByRole('navigation')).toHaveClass('md:hidden');

      // Click a link
      await user.click(screen.getByText(/about/i));
      expect(screen.getByRole('navigation')).not.toHaveClass('md:hidden');
    });
  });

  describe('Portfolio Interaction Flow', () => {
    it('filters and views project details', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter initialEntries={['/portfolio']}>
          <App />
        </MemoryRouter>
      );

      // Filter projects
      await user.click(screen.getByText(/development/i));
      const developmentProjects = projects.filter(p => 
        p.category === 'development'
      );
      developmentProjects.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });

      // View project details
      await user.click(screen.getByText(developmentProjects[0].title));
      expect(screen.getByText(developmentProjects[0].description)).toBeInTheDocument();

      // Return to portfolio
      await user.click(screen.getByText(/back to portfolio/i));
      expect(screen.getByText(/explore my projects/i)).toBeInTheDocument();
    });
  });

  describe('Contact Form Submission Flow', () => {
    it('completes contact form submission process', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter initialEntries={['/contact']}>
          <App />
        </MemoryRouter>
      );

      // Fill out form
      await user.type(screen.getByLabelText(/name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Test message content');

      // Submit form
      await user.click(screen.getByRole('button', { name: /send/i }));

      // Check success message
      await waitFor(() => {
        expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
      });
    });

    it('handles form validation errors', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter initialEntries={['/contact']}>
          <App />
        </MemoryRouter>
      );

      // Submit without filling
      await user.click(screen.getByRole('button', { name: /send/i }));

      // Check error messages
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  describe('Resume Download Flow', () => {
    it('handles resume viewing and downloading', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter initialEntries={['/resume']}>
          <App />
        </MemoryRouter>
      );

      // View online resume
      await user.click(screen.getByText(/view online/i));
      expect(screen.getByText(/professional experience/i)).toBeInTheDocument();

      // Test download
      const downloadLink = screen.getByText(/download pdf/i);
      expect(downloadLink).toHaveAttribute('href', expect.stringMatching(/\.pdf$/));
    });
  });

  describe('Error Handling Flow', () => {
    it('handles invalid routes', async () => {
      render(
        <MemoryRouter initialEntries={['/invalid-route']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/404/i)).toBeInTheDocument();
      expect(screen.getByText(/page not found/i)).toBeInTheDocument();

      // Test navigation back
      const user = userEvent.setup();
      await user.click(screen.getByText(/go back/i));
      expect(screen.getByText(/latest projects/i)).toBeInTheDocument();
    });
  });

  describe('Performance and Loading States', () => {
    it('shows loading states during navigation', async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      // Trigger loading state
      const user = userEvent.setup();
      await user.click(screen.getByText(/portfolio/i));

      // Check loading indicator
      expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();

      // Wait for content
      await waitFor(() => {
        expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
        expect(screen.getByText(/explore my projects/i)).toBeInTheDocument();
      });
    });
  });
});