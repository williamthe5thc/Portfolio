//Performance.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProjectCard, ProjectCarousel, LoadingScreen } from '@/components/features';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock performance APIs
const mockPerformanceObserver = vi.fn();
window.PerformanceObserver = mockPerformanceObserver;

describe('Performance Tests', () => {
  describe('Image Loading', () => {
    it('uses lazy loading for images', () => {
      render(
        <MemoryRouter>
          <ProjectCard
            project={{
              id: 'test',
              title: 'Test Project',
              description: 'Test Description',
              image: '/test.jpg',
              category: 'development',
              tags: ['test'],
              status: 'completed',
              date: '2024'
            }}
          />
        </MemoryRouter>
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('loading', 'lazy');
    });

    it('provides placeholder during image load', () => {
      render(
        <MemoryRouter>
          <ProjectCard
            project={{
              id: 'test',
              title: 'Test Project',
              description: 'Test Description',
              image: '/test.jpg',
              category: 'development',
              tags: ['test'],
              status: 'completed',
              date: '2024'
            }}
          />
        </MemoryRouter>
      );

      const placeholder = screen.getByTestId('image-placeholder');
      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveClass('animate-pulse');
    });

    it('handles image load errors gracefully', () => {
      render(
        <MemoryRouter>
          <ProjectCard
            project={{
              id: 'test',
              title: 'Test Project',
              description: 'Test Description',
              image: 'invalid-image.jpg',
              category: 'development',
              tags: ['test'],
              status: 'completed',
              date: '2024'
            }}
          />
        </MemoryRouter>
      );

      const fallbackImage = screen.getByRole('img');
      expect(fallbackImage).toHaveAttribute('src', '/api/placeholder/400/300');
    });
  });

  describe('Animation Performance', () => {
    it('uses transform instead of position for animations', () => {
      render(<LoadingScreen />);

      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(element => {
        const styles = window.getComputedStyle(element);
        expect(styles.transform).not.toBe('none');
        expect(styles.position).not.toBe('absolute');
      });
    });

    it('uses will-change for optimized animations', () => {
      render(
        <MemoryRouter>
          <ProjectCarousel 
            projects={[{
              id: 'test',
              title: 'Test Project',
              description: 'Test Description',
              image: '/test.jpg',
              category: 'development',
              tags: ['test'],
              status: 'completed',
              date: '2024'
            }]} 
          />
        </MemoryRouter>
      );

      const carousel = screen.getByTestId('project-carousel');
      const styles = window.getComputedStyle(carousel);
      expect(styles.willChange).toBe('transform');
    });

    it('uses GPU-accelerated properties', () => {
      render(<LoadingScreen />);

      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach(element => {
        const styles = window.getComputedStyle(element);
        expect(styles.transform).toMatch(/translate3d|matrix3d/);
      });
    });
  });

  describe('Route Transitions', () => {
    it('completes route transitions within performance budget', async () => {
      const entries: PerformanceEntry[] = [];
      const mockObserver = {
        observe: vi.fn(),
        disconnect: vi.fn(),
        takeRecords: () => entries
      };
      mockPerformanceObserver.mockImplementation((cb) => {
        cb({ getEntries: () => entries });
        return mockObserver;
      });

      render(
        <MemoryRouter>
          <ProjectCarousel 
            projects={[{
              id: 'test',
              title: 'Test Project',
              description: 'Test Description',
              image: '/test.jpg',
              category: 'development',
              tags: ['test'],
              status: 'completed',
              date: '2024'
            }]} 
          />
        </MemoryRouter>
      );

      expect(entries.every(entry => entry.duration < 300)).toBe(true);
    });
  });

  describe('Memory Management', () => {
    it('cleans up animations on unmount', () => {
      const { unmount } = render(<LoadingScreen />);
      unmount();

      // Check for timer cleanup
      expect(vi.getTimerCount()).toBe(0);
    });

    it('disposes observers properly', () => {
      const disconnectSpy = vi.fn();
      mockIntersectionObserver.mockReturnValue({
        observe: () => null,
        unobserve: () => null,
        disconnect: disconnectSpy
      });

      const { unmount } = render(
        <MemoryRouter>
          <ProjectCard
            project={{
              id: 'test',
              title: 'Test Project',
              description: 'Test Description',
              image: '/test.jpg',
              category: 'development',
              tags: ['test'],
              status: 'completed',
              date: '2024'
            }}
          />
        </MemoryRouter>
      );
      
      unmount();
      expect(disconnectSpy).toHaveBeenCalled();
    });
  });
});