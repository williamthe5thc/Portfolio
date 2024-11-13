//tests/pages/HomePage.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '@/pages/Homepage';
import { siteConfig } from '@/content';

describe('HomePage', () => {
  beforeEach(() => {
    // Reset any mocks and render the component
    render(<HomePage />);
  });

  describe('Hero Section', () => {
    it('displays main headings and content', () => {
      expect(screen.getByText(siteConfig.slogan)).toBeInTheDocument();
      expect(screen.getByText(siteConfig.tagline)).toBeInTheDocument();
    });
  });

  describe('Project Carousel', () => {
    it('displays project navigation controls', () => {
      expect(screen.getByLabelText(/previous project/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/next project/i)).toBeInTheDocument();
    });

    it('navigates through projects', async () => {
      const user = userEvent.setup();
      const nextButton = screen.getByLabelText(/next project/i);

      // Get initial project title
      const initialTitle = screen.getByRole('heading', { level: 3 }).textContent;

      // Click next
      await user.click(nextButton);

      // Wait for new project to appear
      await waitFor(() => {
        const newTitle = screen.getByRole('heading', { level: 3 }).textContent;
        expect(newTitle).not.toBe(initialTitle);
      });
    });
  });

  describe('Core Competencies', () => {
    it('displays all core competency cards', () => {
      expect(screen.getByText(/instructional design/i)).toBeInTheDocument();
      expect(screen.getByText(/e-learning development/i)).toBeInTheDocument();
      // Add checks for other competencies
    });

    it('shows competency descriptions on hover', async () => {
      const user = userEvent.setup();
      const card = screen.getByText(/instructional design/i).closest('div');
      
      await user.hover(card!);
      
      await waitFor(() => {
        expect(screen.getByText(/creating engaging learning experiences/i)).toBeInTheDocument();
      });
    });
  });

  describe('Quick Links', () => {
    it('displays all quick link sections', () => {
      expect(screen.getByText(/resume/i)).toBeInTheDocument();
      expect(screen.getByText(/coding projects/i)).toBeInTheDocument();
      expect(screen.getByText(/instructional design projects/i)).toBeInTheDocument();
    });

    it('navigates to correct routes when clicked', async () => {
      const user = userEvent.setup();
      const resumeLink = screen.getByText(/resume/i);

      await user.click(resumeLink);
      
      // Navigation assertion will depend on your router setup
      expect(window.location.hash).toContain('/resume');
    });
  });

  describe('Education Section', () => {
    it('displays education timeline', () => {
      expect(screen.getByText(/education/i)).toBeInTheDocument();
      expect(screen.getByText(/master of education/i)).toBeInTheDocument();
      expect(screen.getByText(/university of utah/i)).toBeInTheDocument();
    });
  });

  describe('Certifications Section', () => {
    it('displays certification cards', () => {
      expect(screen.getByText(/certifications/i)).toBeInTheDocument();
      // Add checks for specific certifications
    });
  });
});