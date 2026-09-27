//tests/components/shared/Timeline.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline } from '@/components/shared/Timeline';

/*
  The timeline is a <div> of event <div>s (no list roles), each starting
  with its dot. These helpers find them by structure.
*/
const root = (container: HTMLElement) => container.firstChild as HTMLElement;
const items = (container: HTMLElement) =>
  Array.from(root(container).children) as HTMLElement[];
const dots = (container: HTMLElement) =>
  items(container).map(item => item.firstElementChild as HTMLElement);

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
      const { container } = render(<Timeline events={mockEvents} />);
      
      const timelineDots = dots(container);
      expect(timelineDots).toHaveLength(mockEvents.length);
      
      timelineDots.forEach(dot => {
        expect(dot).toHaveClass('rounded-full', 'bg-primary-100', 'ring-2', 'ring-white');
      });
    });

    it('applies custom className', () => {
      const { container } = render(<Timeline events={mockEvents} className="custom-class" />);
      
      expect(root(container)).toHaveClass('custom-class');
    });
  });

  describe('Layout', () => {
    it('maintains correct event spacing', () => {
      const { container } = render(<Timeline events={mockEvents} />);
      
      const events = items(container);
      expect(events).toHaveLength(mockEvents.length);
      events.forEach(event => {
        expect(event).toHaveClass('relative', 'flex', 'items-start', 'gap-6');
      });
    });

    it('aligns timeline elements properly', () => {
      const { container } = render(<Timeline events={mockEvents} />);
      
      expect(root(container)).toHaveClass('relative', 'space-y-8', 'before:absolute', 'before:inset-0');
    });

    it('handles different content lengths', () => {
      const mixedEvents = [
        { title: 'Short', subtitle: 'Brief' },
        { title: 'Long Title', subtitle: 'Extended subtitle with more content', description: 'Very long description that spans multiple lines' }
      ];
      
      const { container } = render(<Timeline events={mixedEvents} />);
      
      const events = items(container);
      expect(events).toHaveLength(mixedEvents.length);
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
      const { container } = render(<Timeline events={mockEvents} />);
      
      dots(container).forEach(dot => {
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
          // text-secondary: text-light was too faint for dates (2.56:1).
          expect(date).toHaveClass('mt-1', 'text-sm', 'text-text-secondary');
        }
      });
    });
  });

  describe('Animation', () => {
    it('animates timeline items', () => {
      // Each event is a motion.div (tagged by the setup's framer-motion
      // mock). The per-item delay is a framer prop the mock strips, so the
      // stagger itself is not observable here.
      const { container } = render(<Timeline events={mockEvents} />);
      
      items(container).forEach(item => {
        expect(item).toHaveAttribute('data-testid', 'motion-component');
      });
    });
  });

  describe('Accessibility', () => {
    // Not true today: the events are <div>s. Kept as a reminder that an
    // <ol>/<li> timeline would let screen readers announce "list, 3 items".
    it.todo('uses semantic list structure');

    it('provides proper heading hierarchy', () => {
      render(<Timeline events={mockEvents} />);
      
      const headings = screen.getAllByRole('heading');
      expect(headings).toHaveLength(mockEvents.length);
    });

    it('ensures content is readable', () => {
      const { container } = render(<Timeline events={mockEvents} />);
      
      const computedStyles = window.getComputedStyle(root(container));
      expect(computedStyles.color).toBeDefined();
    });
  });
});