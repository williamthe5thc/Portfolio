//tests/pages/ResumePage.test.tsx

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link } from 'react-router-dom';
import ResumePage from '@/pages/ResumePage';

// Mock components
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  Link: vi.fn(({ to, children, className }) => (
    <a href={to} className={className}>{children}</a>
  ))
}));

describe('ResumePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Page Structure', () => {
    it('renders page header with correct content', () => {
      render(<ResumePage />);
      
      expect(screen.getByText('Professional Resumes')).toBeInTheDocument();
      expect(screen.getByText(/explore my specialized resumes/i)).toBeInTheDocument();
    });

    it('renders all resume type cards', () => {
      render(<ResumePage />);
      
      expect(screen.getByText('Software Development Resume')).toBeInTheDocument();
      expect(screen.getByText('Instructional Design Resume')).toBeInTheDocument();
      expect(screen.getByText('Academic Resume')).toBeInTheDocument();
    });
  });

  describe('Resume Cards', () => {
    it('displays proper icons for each resume type', () => {
      render(<ResumePage />);
      
      const icons = document.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThanOrEqual(3); // At least one icon per resume type
    });

    it('shows descriptions for each resume type', () => {
      render(<ResumePage />);
      
      expect(screen.getByText(/focused on programming skills/i)).toBeInTheDocument();
      expect(screen.getByText(/highlighting learning design experience/i)).toBeInTheDocument();
      expect(screen.getByText(/detailing research experience/i)).toBeInTheDocument();
    });

    it('applies distinct colors to resume type headers', () => {
      render(<ResumePage />);
      
      const headers = screen.getAllByRole('heading', { level: 2 });
      headers.forEach(header => {
        const parentDiv = header.closest('div');
        expect(parentDiv?.previousElementSibling).toHaveClass(/bg-.*-500/);
      });
    });
  });

  describe('Action Buttons', () => {
    it('renders view and download buttons for each resume', () => {
      render(<ResumePage />);
      
      const viewButtons = screen.getAllByText(/view online/i);
      const downloadButtons = screen.getAllByText(/download pdf/i);
      
      expect(viewButtons).toHaveLength(3);
      expect(downloadButtons).toHaveLength(3);
    });

    it('configures view buttons with correct routes', () => {
      render(<ResumePage />);
      
      const viewButtons = screen.getAllByText(/view online/i);
      expect(viewButtons[0].closest('a')).toHaveAttribute('href', '/resume/software');
      expect(viewButtons[1].closest('a')).toHaveAttribute('href', '/resume/instructional');
      expect(viewButtons[2].closest('a')).toHaveAttribute('href', '/resume/academic');
    });

    it('configures download buttons with correct paths', () => {
      render(<ResumePage />);
      
      const downloadButtons = screen.getAllByText(/download pdf/i);
      downloadButtons.forEach(button => {
        const link = button.closest('a');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        expect(link?.getAttribute('href')).toMatch(/\.pdf$/);
      });
    });
  });

  describe('Interactions', () => {
    it('handles view button clicks', async () => {
      const user = userEvent.setup();
      render(<ResumePage />);
      
      const viewButtons = screen.getAllByText(/view online/i);
      await user.click(viewButtons[0]);
      
      // Navigation will be handled by React Router
      expect(viewButtons[0].closest('a')).toHaveAttribute('href', '/resume/software');
    });

    it('applies hover effects to cards', () => {
      render(<ResumePage />);
      
      const cards = screen.getAllByRole('article');
      cards.forEach(card => {
        expect(card).toHaveClass('hover:shadow-lg', 'transition-shadow');
      });
    });
  });

  describe('Layout and Responsiveness', () => {
    it('uses responsive grid layout', () => {
      render(<ResumePage />);
      
      const grid = screen.getByRole('main').firstChild;
      expect(grid).toHaveClass('grid', 'md:grid-cols-3', 'gap-6');
    });

    it('maintains consistent card heights', () => {
      render(<ResumePage />);
      
      const cards = screen.getAllByRole('article');
      cards.forEach(card => {
        expect(card).toHaveClass('flex-1', 'flex', 'flex-col');
      });
    });
  });

  describe('Accessibility', () => {
    it('provides proper heading hierarchy', () => {
      render(<ResumePage />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('Professional Resumes');
      
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s).toHaveLength(3);
    });

    it('ensures buttons have accessible names', () => {
      render(<ResumePage />);
      
      const buttons = screen.getAllByRole('link');
      buttons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });

    it('uses semantic HTML structure', () => {
      render(<ResumePage />);
      
      expect(document.querySelector('main')).toBeInTheDocument();
      expect(document.querySelector('section')).toBeInTheDocument();
      expect(screen.getAllByRole('article')).toHaveLength(3);
    });
  });

  describe('SEO', () => {
    it('sets correct meta tags', () => {
      render(<ResumePage />);
      
      expect(document.title).toContain('Resumes');
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription?.getAttribute('content')).toContain('specialized resumes');
    });
  });

  describe('Error Handling', () => {
    it('handles missing resume files gracefully', async () => {
      const user = userEvent.setup();
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      render(<ResumePage />);
      const downloadButtons = screen.getAllByText(/download pdf/i);
      
      await user.click(downloadButtons[0]);
      
      expect(consoleError).not.toHaveBeenCalled();
      consoleError.mockRestore();
    });
  });
});