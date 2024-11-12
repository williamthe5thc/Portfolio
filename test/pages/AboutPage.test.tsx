//tests/pages/AboutPage.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '@/pages/AboutPage';
import { siteConfig, stats, competencies } from '@/content';

describe('AboutPage', () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  describe('Page Structure', () => {
    it('renders page header with correct title', () => {
      expect(screen.getByText('About Me')).toBeInTheDocument();
      expect(screen.getByText(/learn about my journey/i)).toBeInTheDocument();
    });

    it('sets correct meta tags', () => {
      const title = document.title;
      expect(title).toContain('About');
      
      const description = document.querySelector('meta[name="description"]');
      expect(description?.getAttribute('content')).toContain(siteConfig.author);
    });
  });

  describe('Stats Section', () => {
    it('displays all statistics', () => {
      stats.forEach(stat => {
        expect(screen.getByText(stat.value)).toBeInTheDocument();
        expect(screen.getByText(stat.label)).toBeInTheDocument();
      });
    });

    it('applies animation to stat cards', () => {
      const statCards = screen.getAllByRole('article');
      statCards.forEach(card => {
        expect(card).toHaveAttribute('data-animate');
      });
    });
  });

  describe('Bio Section', () => {
    it('displays approach section', () => {
      expect(screen.getByText('My Approach')).toBeInTheDocument();
      expect(screen.getByText(/background in psychology/i)).toBeInTheDocument();
    });

    it('shows areas of expertise', () => {
      expect(screen.getByText('Areas of Expertise')).toBeInTheDocument();
      competencies.forEach(comp => {
        expect(screen.getByText(comp.title)).toBeInTheDocument();
      });
    });
  });

  describe('Education & Experience', () => {
    it('displays timeline section', () => {
      expect(screen.getByText('Education & Experience')).toBeInTheDocument();
    });

    it('shows timeline events in chronological order', () => {
      const timelineEvents = screen.getAllByRole('listitem');
      expect(timelineEvents.length).toBeGreaterThan(0);
      
      // Check dates are in descending order
      const dates = timelineEvents.map(event => {
        const dateText = event.textContent?.match(/\d{4}/)?.[0];
        return dateText ? parseInt(dateText) : 0;
      });
      
      const isSorted = dates.every((date, i) => {
        return i === 0 || date <= dates[i - 1];
      });
      
      expect(isSorted).toBe(true);
    });
  });

  describe('Interactive Elements', () => {
    it('animates elements on scroll', () => {
      const sections = screen.getAllByRole('region');
      sections.forEach(section => {
        expect(section).toHaveAttribute('data-animate');
      });
    });
  });

  describe('Responsive Layout', () => {
    it('adjusts grid layout for different screens', () => {
      const grid = screen.getAllByRole('grid')[0];
      expect(grid).toHaveClass(
        'grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-4'
      );
    });
  });

  describe('Accessibility', () => {
    it('uses proper heading hierarchy', () => {
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('About Me');

      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('provides proper section landmarks', () => {
      const sections = screen.getAllByRole('region');
      sections.forEach(section => {
        expect(section).toHaveAttribute('aria-labelledby');
      });
    });
  });
});