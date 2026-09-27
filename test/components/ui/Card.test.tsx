//tests/components/ui/Card.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { 
  BaseCard, 
  CoreCompetency,
  JourneyCard,
  PhilosophyCard,
  StatsGrid 
} from '@/components/ui/Card';
import { BookOpen } from 'lucide-react';

describe('Card Components', () => {
  describe('BaseCard', () => {
    it('renders children correctly', () => {
      render(
        <BaseCard>
          <div>Test Content</div>
        </BaseCard>
      );
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('renders the card surface', () => {
      // The hover lift itself is a framer-motion prop, which the test
      // setup's mock strips, so check the surface the card draws instead.
      render(<BaseCard hover>Content</BaseCard>);
      const card = screen.getByText('Content');
      expect(card).toHaveClass('bg-white', 'rounded-xl', 'shadow-lg', 'p-6');
    });

    it('is not a keyboard stop when it is static', () => {
      render(<BaseCard>Static</BaseCard>);
      expect(screen.getByText('Static')).not.toHaveAttribute('tabindex');
    });

    it('handles click events', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<BaseCard onClick={handleClick}>Clickable</BaseCard>);
      await user.click(screen.getByText('Clickable'));
      
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('CoreCompetency', () => {
    const competencyProps = {
      icon: BookOpen,
      title: 'Test Competency',
      description: 'Test Description',
      color: 'text-primary-600'
    };

    it('renders competency information', () => {
      render(<CoreCompetency {...competencyProps} />);
      
      expect(screen.getByText(competencyProps.title)).toBeInTheDocument();
      expect(screen.getByText(competencyProps.description)).toBeInTheDocument();
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('applies custom color', () => {
      render(<CoreCompetency {...competencyProps} />);
      // The colour class sits on the icon itself.
      const icon = document.querySelector('svg');
      expect(icon).toHaveClass(competencyProps.color);
    });
  });

  describe('JourneyCard', () => {
    const journeyProps = {
      icon: BookOpen,
      title: 'Education',
      items: [
        { title: 'Degree', subtitle: 'University', date: '2024' },
        { title: 'Course', subtitle: 'Institute', date: '2023' }
      ]
    };

    it('renders journey timeline', () => {
      render(<JourneyCard {...journeyProps} />);
      
      expect(screen.getByText(journeyProps.title)).toBeInTheDocument();
      journeyProps.items.forEach(item => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
        expect(screen.getByText(item.subtitle)).toBeInTheDocument();
        expect(screen.getByText(item.date)).toBeInTheDocument();
      });
    });

    it('shows timeline indicators', () => {
      render(<JourneyCard {...journeyProps} />);
      // Each item is a block with a left rule, not a list item.
      journeyProps.items.forEach(item => {
        expect(screen.getByText(item.title).parentElement).toHaveClass('border-l-2');
      });
    });
  });

  describe('PhilosophyCard', () => {
    const philosophyProps = {
      icon: BookOpen,
      content: 'Test Philosophy'
    };

    it('renders philosophy content', () => {
      render(<PhilosophyCard {...philosophyProps} />);
      
      expect(screen.getByText(philosophyProps.content)).toBeInTheDocument();
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('centers content', () => {
      render(<PhilosophyCard {...philosophyProps} />);
      const card = screen.getByText(philosophyProps.content).parentElement;
      expect(card).toHaveClass('text-center');
    });
  });

  describe('StatsGrid', () => {
    const statsProps = {
      stats: [
        { label: 'Test Stat 1', value: '100' },
        { label: 'Test Stat 2', value: '200' }
      ]
    };

    it('renders stats in grid layout', () => {
      render(<StatsGrid {...statsProps} />);
      
      statsProps.stats.forEach(stat => {
        expect(screen.getByText(stat.label)).toBeInTheDocument();
        expect(screen.getByText(stat.value)).toBeInTheDocument();
      });
    });

    it('applies responsive grid classes', () => {
      // Two columns from md up; a layout grid, not an ARIA grid.
      const { container } = render(<StatsGrid {...statsProps} />);
      expect(container.firstChild).toHaveClass('grid', 'md:grid-cols-2');
    });

    it('animates stats on render', () => {
      render(<StatsGrid {...statsProps} />);
      // Each stat's headline is an h2 inside a motion element (tagged by
      // the setup's framer-motion mock).
      const headings = screen.getAllByRole('heading', { level: 2 });
      expect(headings).toHaveLength(statsProps.stats.length);
      headings.forEach(heading => {
        expect(heading.closest('[data-testid="motion-component"]')).not.toBeNull();
      });
    });
  });
});