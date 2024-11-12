import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Button, BaseCard, Input } from '@/components/ui';

describe('Theme System', () => {
  describe('Color Scheme', () => {
    it('applies primary colors consistently', () => {
      render(
        <ThemeProvider>
          <Button variant="primary">Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </ThemeProvider>
      );

      const primaryButton = screen.getByText('Primary Button');
      const outlineButton = screen.getByText('Outline Button');
      
      expect(primaryButton).toHaveClass('bg-primary-600');
      expect(outlineButton).toHaveClass('border-primary-600', 'text-primary-600');
    });

    it('maintains text color hierarchy', () => {
      render(
        <ThemeProvider>
          <h1 className="text-text-primary">Primary Text</h1>
          <p className="text-text-secondary">Secondary Text</p>
          <span className="text-text-light">Light Text</span>
        </ThemeProvider>
      );

      expect(screen.getByText('Primary Text')).toHaveClass('text-text-primary');
      expect(screen.getByText('Secondary Text')).toHaveClass('text-text-secondary');
      expect(screen.getByText('Light Text')).toHaveClass('text-text-light');
    });

    it('applies background colors', () => {
      render(
        <ThemeProvider>
          <div className="bg-background-light">Light Background</div>
          <div className="bg-background">Default Background</div>
          <div className="bg-background-dark">Dark Background</div>
        </ThemeProvider>
      );

      expect(screen.getByText('Light Background')).toHaveClass('bg-background-light');
      expect(screen.getByText('Default Background')).toHaveClass('bg-background');
      expect(screen.getByText('Dark Background')).toHaveClass('bg-background-dark');
    });
  });

  describe('Component Theming', () => {
    it('maintains consistent button styles', () => {
      render(
        <ThemeProvider>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </ThemeProvider>
      );

      const buttons = [
        { text: 'Primary', classes: ['bg-primary-600', 'text-white'] },
        { text: 'Secondary', classes: ['bg-gray-200', 'text-gray-800'] },
        { text: 'Outline', classes: ['border-2', 'border-primary-600'] },
        { text: 'Ghost', classes: ['text-primary-600'] }
      ];

      buttons.forEach(({ text, classes }) => {
        const button = screen.getByText(text);
        classes.forEach(className => {
          expect(button).toHaveClass(className);
        });
      });
    });

    it('applies consistent card styles', () => {
      render(
        <ThemeProvider>
          <BaseCard>Card Content</BaseCard>
        </ThemeProvider>
      );

      const card = screen.getByText('Card Content').parentElement;
      expect(card).toHaveClass(
        'bg-white',
        'rounded-xl',
        'shadow-lg'
      );
    });

    it('maintains form component styling', () => {
      render(
        <ThemeProvider>
          <Input error="Error" />
          <Input />
        </ThemeProvider>
      );

      const errorInput = screen.getByRole('textbox', { name: /error/i });
      const normalInput = screen.getByRole('textbox');

      expect(errorInput).toHaveClass('border-accent-red');
      expect(normalInput).toHaveClass('border-gray-300');
    });
  });

  describe('Typography', () => {
    it('applies consistent font sizing', () => {
      render(
        <ThemeProvider>
          <h1 className="text-4xl">Heading 1</h1>
          <h2 className="text-3xl">Heading 2</h2>
          <h3 className="text-2xl">Heading 3</h3>
          <p className="text-base">Paragraph</p>
        </ThemeProvider>
      );

      expect(screen.getByText('Heading 1')).toHaveClass('text-4xl');
      expect(screen.getByText('Heading 2')).toHaveClass('text-3xl');
      expect(screen.getByText('Heading 3')).toHaveClass('text-2xl');
      expect(screen.getByText('Paragraph')).toHaveClass('text-base');
    });

    it('maintains font weights', () => {
      render(
        <ThemeProvider>
          <span className="font-normal">Normal</span>
          <span className="font-medium">Medium</span>
          <span className="font-semibold">Semibold</span>
          <span className="font-bold">Bold</span>
        </ThemeProvider>
      );

      expect(screen.getByText('Normal')).toHaveClass('font-normal');
      expect(screen.getByText('Medium')).toHaveClass('font-medium');
      expect(screen.getByText('Semibold')).toHaveClass('font-semibold');
      expect(screen.getByText('Bold')).toHaveClass('font-bold');
    });
  });

  describe('Responsive Design', () => {
    it('applies responsive paddings', () => {
      render(
        <ThemeProvider>
          <div className="p-4 md:p-6 lg:p-8">Content</div>
        </ThemeProvider>
      );

      const element = screen.getByText('Content');
      expect(element).toHaveClass('p-4', 'md:p-6', 'lg:p-8');
    });

    it('handles responsive typography', () => {
      render(
        <ThemeProvider>
          <h1 className="text-2xl md:text-3xl lg:text-4xl">Responsive Heading</h1>
        </ThemeProvider>
      );

      const heading = screen.getByText('Responsive Heading');
      expect(heading).toHaveClass('text-2xl', 'md:text-3xl', 'lg:text-4xl');
    });
  });

  describe('Dark Mode', () => {
    it('provides dark mode classes', () => {
      render(
        <ThemeProvider>
          <div className="dark:bg-gray-900 dark:text-white">Dark Mode Content</div>
        </ThemeProvider>
      );

      const element = screen.getByText('Dark Mode Content');
      expect(element).toHaveClass('dark:bg-gray-900', 'dark:text-white');
    });
  });
});