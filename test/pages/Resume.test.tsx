import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import ResumePage from '@/pages/ResumePage';
import { siteConfig } from '@/content';

// Mock router hooks
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: vi.fn()
}));

// Mock download function
const mockDownload = vi.fn();
global.URL.createObjectURL = vi.fn();
global.URL.revokeObjectURL = vi.fn();

describe('ResumePage', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as any).mockReturnValue(mockNavigate);
    // Reset download tracking
    localStorage.clear();
  });

  describe('Resume Type Selection', () => {
    it('displays all resume type cards', () => {
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      expect(screen.getByText(/software development/i)).toBeInTheDocument();
      expect(screen.getByText(/instructional design/i)).toBeInTheDocument();
      expect(screen.getByText(/academic/i)).toBeInTheDocument();
    });

    it('shows resume descriptions', () => {
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      expect(screen.getByText(/programming skills/i)).toBeInTheDocument();
      expect(screen.getByText(/learning design experience/i)).toBeInTheDocument();
      expect(screen.getByText(/research experience/i)).toBeInTheDocument();
    });

    it('applies distinct styling to each resume type', () => {
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const cards = screen.getAllByRole('article');
      const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];
      
      cards.forEach((card, index) => {
        expect(card.querySelector(`.${colors[index]}`)).toBeInTheDocument();
      });
    });
  });

  describe('Resume Actions', () => {
    it('handles view online clicks', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const viewButtons = screen.getAllByText(/view online/i);
      await user.click(viewButtons[0]);
      
      expect(mockNavigate).toHaveBeenCalledWith('/resume/software');
    });

    it('handles PDF downloads', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const downloadButtons = screen.getAllByText(/download pdf/i);
      await user.click(downloadButtons[0]);
      
      const link = document.querySelector('a[download]');
      expect(link).toHaveAttribute('href', expect.stringContaining('.pdf'));
    });

    it('tracks download attempts', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const downloadButtons = screen.getAllByText(/download pdf/i);
      await user.click(downloadButtons[0]);
      
      const downloadCount = localStorage.getItem('resumeDownloads');
      expect(downloadCount).toBe('1');
    });
  });

  describe('View Transitions', () => {
    it('animates card transitions', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const cards = screen.getAllByRole('article');
      await user.hover(cards[0]);
      
      expect(cards[0]).toHaveStyle('transform: scale(1.02)');
    });

    it('provides visual feedback on download', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const downloadButtons = screen.getAllByText(/download pdf/i);
      await user.click(downloadButtons[0]);
      
      await waitFor(() => {
        expect(screen.getByText(/downloading/i)).toBeInTheDocument();
      });
    });
  });

  describe('Error Handling', () => {
    it('handles missing PDF files', async () => {
      const user = userEvent.setup();
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const downloadButtons = screen.getAllByText(/download pdf/i);
      await user.click(downloadButtons[0]);
      
      expect(screen.getByText(/failed to download/i)).toBeInTheDocument();
      consoleSpy.mockRestore();
    });

    it('prevents rapid downloads', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const downloadButton = screen.getAllByText(/download pdf/i)[0];
      
      // Click multiple times rapidly
      await user.click(downloadButton);
      await user.click(downloadButton);
      await user.click(downloadButton);
      
      expect(mockDownload).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('provides proper ARIA labels', () => {
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveAccessibleName();
      });
    });

    it('maintains focus during downloads', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const downloadButton = screen.getAllByText(/download pdf/i)[0];
      await user.click(downloadButton);
      
      expect(downloadButton).toHaveFocus();
    });

    it('announces download status', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ResumePage />
        </MemoryRouter>
      );
      
      const downloadButton = screen.getAllByText(/download pdf/i)[0];
      await user.click(downloadButton);
      
      const status = screen.getByRole('status');
      expect(status).toHaveAttribute('aria-live', 'polite');
    });
  });
});