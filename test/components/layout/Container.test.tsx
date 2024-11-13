//tests/components/layout/Container.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container, Section, GridContainer, SectionContainer } from '@/components/layout/Container';

describe('Container Components', () => {
  describe('Container', () => {
    it('renders children correctly', () => {
      render(
        <Container>
          <div>Test Content</div>
        </Container>
      );
      
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies base container classes', () => {
      render(<Container>Content</Container>);
      
      const container = screen.getByText('Content').parentElement;
      expect(container).toHaveClass('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
    });

    it('accepts custom className', () => {
      render(<Container className="custom-class">Content</Container>);
      
      const container = screen.getByText('Content').parentElement;
      expect(container).toHaveClass('custom-class');
    });

    it('animates content when animate prop is true', () => {
      render(<Container animate>Content</Container>);
      
      const container = screen.getByText('Content').parentElement;
      expect(container).toHaveAttribute('data-animate');
    });
  });

  describe('Section', () => {
    it('renders with different backgrounds', () => {
      const { rerender } = render(<Section background="light">Content</Section>);
      expect(screen.getByText('Content').closest('section')).toHaveClass('bg-background-light');

      rerender(<Section background="dark">Content</Section>);
      expect(screen.getByText('Content').closest('section')).toHaveClass('bg-background-dark');

      rerender(<Section background="primary">Content</Section>);
      expect(screen.getByText('Content').closest('section')).toHaveClass('bg-primary-50');
    });

    it('applies different padding sizes', () => {
      const { rerender } = render(<Section paddingY="sm">Content</Section>);
      expect(screen.getByText('Content').closest('section')).toHaveClass('py-8');

      rerender(<Section paddingY="md">Content</Section>);
      expect(screen.getByText('Content').closest('section')).toHaveClass('py-16');

      rerender(<Section paddingY="lg">Content</Section>);
      expect(screen.getByText('Content').closest('section')).toHaveClass('py-24');
    });

    it('combines container classes with section styles', () => {
      render(<Section className="custom-class">Content</Section>);
      
      const section = screen.getByText('Content').closest('section');
      expect(section).toHaveClass('custom-class');
      expect(section?.firstElementChild).toHaveClass('max-w-7xl', 'mx-auto');
    });
  });

  describe('GridContainer', () => {
    it('renders grid with default columns', () => {
      render(<GridContainer>Content</GridContainer>);
      
      const grid = screen.getByText('Content').parentElement;
      expect(grid).toHaveClass('grid');
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
    });

    it('applies custom column configuration', () => {
      render(
        <GridContainer
          cols={{
            sm: 2,
            md: 3,
            lg: 4,
            xl: 6
          }}
        >
          Content
        </GridContainer>
      );
      
      const grid = screen.getByText('Content').parentElement;
      expect(grid).toHaveClass(
        'grid-cols-2',
        'md:grid-cols-3',
        'lg:grid-cols-4',
        'xl:grid-cols-6'
      );
    });

    it('handles different gap sizes', () => {
      const { rerender } = render(<GridContainer gap="sm">Content</GridContainer>);
      expect(screen.getByText('Content').parentElement).toHaveClass('gap-4');

      rerender(<GridContainer gap="md">Content</GridContainer>);
      expect(screen.getByText('Content').parentElement).toHaveClass('gap-6');

      rerender(<GridContainer gap="lg">Content</GridContainer>);
      expect(screen.getByText('Content').parentElement).toHaveClass('gap-8');
    });
  });

  describe('SectionContainer', () => {
    it('applies default padding', () => {
      render(<SectionContainer>Content</SectionContainer>);
      
      const container = screen.getByText('Content').parentElement;
      expect(container).toHaveClass('py-12');
    });

    it('combines with custom classes', () => {
      render(<SectionContainer className="custom-class">Content</SectionContainer>);
      
      const container = screen.getByText('Content').parentElement;
      expect(container).toHaveClass('custom-class', 'py-12');
    });
  });

  describe('Accessibility', () => {
    it('preserves semantic structure', () => {
      render(
        <Section>
          <header>Header</header>
          <main>Main Content</main>
          <footer>Footer</footer>
        </Section>
      );
      
      expect(screen.getByText('Header').tagName).toBe('HEADER');
      expect(screen.getByText('Main Content').tagName).toBe('MAIN');
      expect(screen.getByText('Footer').tagName).toBe('FOOTER');
    });
  });

  describe('Responsive Behavior', () => {
    it('maintains content width on different screens', () => {
      render(<Container>Content</Container>);
      
      const container = screen.getByText('Content').parentElement;
      expect(container).toHaveClass('px-4', 'sm:px-6', 'lg:px-8');
    });
  });
});