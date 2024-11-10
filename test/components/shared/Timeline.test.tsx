//tests/components/shared/Timeline.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline } from '@/components/shared/Timeline';

describe('Timeline', () => {
  const mockEvents = [
    {
      title: 'Event 1',
      subtitle: 'Subtitle 1',
      date: '2024',
      description: 'Description 1'
    },
    {
      title: 'Event 2',
      subtitle: 'Subtitle 2',
      date: '2023',
      description: 'Description 2'
    },
    {
      title: 'Event 3',
      subtitle: 'Subtitle 3',
      date: '2022'
    }
  ];

  describe('Rendering', () => {
    it('renders all timeline events', () => {
      render(<Timeline events={mockEvents} />);
      
      mockEvents.forEach(event => {
        expect(screen.getByText(event.title)).toBeInTheDocument();
        expect(screen.getByText(event.subtitle)).toBeInTheDocument();
        if (event.date) {
          expect(screen.getByText(event.date)).toBeInTheDocument();
        }
      });
    });

    it('renders optional descriptions when provided', () => {
      render(<Timeline events={mockEvents} />);
      
      mockEvents.forEach(event => {
        if (event.description) {
          expect(screen.getByText(event.description)).toBeInTheDocument();
        }
      });
    });

    it('renders timeline dots and lines', () => {
      render(<Timeline events={mockEvents} />);
      
      const timelineDots = screen.getAllByRole('presentation');
      expect(timelineDots).toHaveLength(mockEvents.length);
      
      timelineDots.forEach(dot => {
        expect(dot).toHaveClass('rounded-full', 'bg-primary-100', 'ring-2', 'ring-white');
      });
    });

    it('applies custom className', () => {
      render(<Timeline events={mockEvents} className="custom-class" />);
      
      const timeline = screen.getByRole('list');
      expect(timeline).toHaveClass('custom-class');
    });
  });

  describe('Layout', () => {
    it('maintains correct event spacing', () => {
      render(<Timeline events={mockEvents} />);
      
      const events = screen.getAllByRole('listitem');
      events.forEach(event => {
        expect(event).toHaveClass('relative', 'flex', 'items-start', 'gap-6');
      });
    });

    it('aligns timeline elements properly', () => {
      render(<Timeline events={mockEvents} />);
      
      const timeline = screen.getByRole('list');
      expect(timeline).toHaveClass('relative', 'space-y-8', 'before:absolute', 'before:inset-0');
    });

    it('handles different content lengths', () => {
      const mixedEvents = [
        { title: 'Short', subtitle: 'Brief' },
        { title: 'Long Title', subtitle: 'Extended subtitle with more content', description: 'Very long description that spans multiple lines' }
      ];
      
      render(<Timeline events={mixedEvents} />);
      
      const events = screen.getAllByRole('listitem');
      events.forEach(event => {
        expect(event).toHaveClass('gap-6'); // Consistent spacing
      });
    });
  });

  describe('Visual Elements', () => {
    it('uses calendar icons', () => {
      render(<Timeline events={mockEvents} />);
      
      const calendarIcons = document.querySelectorAll('svg');
      expect(calendarIcons).toHaveLength(mockEvents.length);
    });

    it('applies correct colors to timeline elements', () => {
      render(<Timeline events={mockEvents} />);
      
      const dots = screen.getAllByRole('presentation');
      dots.forEach(dot => {
        expect(dot).toHaveClass('bg-primary-100');
        expect(dot.querySelector('svg')).toHaveClass('text-primary-600');
      });
    });

    it('maintains consistent icon sizes', () => {
      render(<Timeline events={mockEvents} />);
      
      const icons = document.querySelectorAll('svg');
      icons.forEach(icon => {
        expect(icon).toHaveClass('h-4', 'w-4');
      });
    });
  });

  describe('Typography', () => {
    it('applies correct text styles', () => {
      render(<Timeline events={mockEvents} />);
      
      const titles = screen.getAllByRole('heading');
      titles.forEach(title => {
        expect(title).toHaveClass('font-semibold', 'text-text-primary');
      });
      
      mockEvents.forEach(event => {
        const subtitle = screen.getByText(event.subtitle);
        expect(subtitle).toHaveClass('text-text-secondary');
      });
    });

    it('styles dates distinctly', () => {
      render(<Timeline events={mockEvents} />);
      
      mockEvents.forEach(event => {
        if (event.date) {
          const date = screen.getByText(event.date);
          expect(date).toHaveClass('mt-1', 'text-sm', 'text-text-light');
        }
      });
    });
  });

  describe('Animation', () => {
    it('animates timeline items', () => {
      render(<Timeline events={mockEvents} />);
      
      const items = screen.getAllByRole('listitem');
      items.forEach(item => {
        expect(item).toHaveAttribute('data-animate');
      });
    });

    it('applies stagger effect to items', () => {
      render(<Timeline events={mockEvents} />);
      
      const items = screen.getAllByRole('listitem');
      items.forEach((item, index) => {
        expect(item).toHaveStyle({
          '--motion-delay': `${index * 0.2}s`
        });
      });
    });
  });

  describe('Accessibility', () => {
    it('uses semantic list structure', () => {
      render(<Timeline events={mockEvents} />);
      
      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(mockEvents.length);
    });

    it('provides proper heading hierarchy', () => {
      render(<Timeline events={mockEvents} />);
      
      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(mockEvents.length);
    });

    it('ensures content is readable', () => {
      render(<Timeline events={mockEvents} />);
      
      const timeline = screen.getByRole('list');
      const computedStyles = window.getComputedStyle(timeline);
      expect(computedStyles.color).toBeDefined();
    });
  });
});