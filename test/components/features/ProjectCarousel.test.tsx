//ProjectCarousel.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ProjectCarousel } from '@/components/shared/ProjectCarousel';

// Mock data
const mockProjects = [
  {
    id: 'project-1',
    title: 'Project 1',
    description: 'Description 1',
    image: '/image1.jpg',
    detailPage: true,
    category: 'development',
    tags: ['React'],
    status: 'completed',
    date: '2024'
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'Description 2',
    image: '/image2.jpg',
    detailPage: false,
    projectUrl: 'https://example.com',
    category: 'design',
    tags: ['UI/UX'],
    status: 'completed',
    date: '2024'
  }
];

const renderCarousel = (props = {}) => {
  return render(
    <MemoryRouter>
      <ProjectCarousel 
        projects={mockProjects}
        autoPlayInterval={5000}
        {...props}
      />
    </MemoryRouter>
  );
};

describe('ProjectCarousel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders initial project correctly', () => {
      renderCarousel();
      
      expect(screen.getByText(mockProjects[0].title)).toBeInTheDocument();
      expect(screen.getByText(mockProjects[0].description)).toBeInTheDocument();
      expect(screen.getByAltText(mockProjects[0].title)).toHaveAttribute('src', mockProjects[0].image);
    });

    it('displays navigation buttons', () => {
      renderCarousel();
      
      expect(screen.getByLabelText('Previous project')).toBeInTheDocument();
      expect(screen.getByLabelText('Next project')).toBeInTheDocument();
    });

    it('shows correct number of navigation dots', () => {
      renderCarousel();
      
      const dots = screen.getAllByRole('button', { name: /go to project/i });
      expect(dots).toHaveLength(mockProjects.length);
    });

    it('displays project tags', () => {
      renderCarousel();
      
      mockProjects[0].tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });
  });

  describe('Navigation', () => {
    it('handles next button click', async () => {
      const user = userEvent.setup();
      renderCarousel();
      
      await user.click(screen.getByLabelText('Next project'));
      
      await waitFor(() => {
        expect(screen.getByText(mockProjects[1].title)).toBeInTheDocument();
      });
    });

    it('handles previous button click', async () => {
      const user = userEvent.setup();
      renderCarousel();
      
      // Go to next project first
      await user.click(screen.getByLabelText('Next project'));
      await user.click(screen.getByLabelText('Previous project'));
      
      await waitFor(() => {
        expect(screen.getByText(mockProjects[0].title)).toBeInTheDocument();
      });
    });

    it('cycles through projects', async () => {
      renderCarousel();
      
      // Test autoplay
      vi.advanceTimersByTime(5000);
      
      await waitFor(() => {
        expect(screen.getByText(mockProjects[1].title)).toBeInTheDocument();
      });
      
      vi.advanceTimersByTime(5000);
      
      await waitFor(() => {
        expect(screen.getByText(mockProjects[0].title)).toBeInTheDocument();
      });
    });

    it('handles dot navigation correctly', async () => {
      const user = userEvent.setup();
      renderCarousel();
      
      const dots = screen.getAllByRole('button', { name: /go to project/i });
      await user.click(dots[1]);
      
      await waitFor(() => {
        expect(screen.getByText(mockProjects[1].title)).toBeInTheDocument();
      });
    });
  });

  describe('Project Links', () => {
    it('renders View Details button for projects with detail pages', () => {
      renderCarousel();
      
      expect(screen.getByRole('link', { name: /view details/i }))
        .toHaveAttribute('href', `/portfolio/${mockProjects[0].id}`);
    });

    it('handles external project URLs', async () => {
      const user = userEvent.setup();
      renderCarousel();
      
      await user.click(screen.getByLabelText('Next project'));
      
      await waitFor(() => {
        expect(screen.getByRole('link', { name: /view project/i }))
          .toHaveAttribute('href', mockProjects[1].projectUrl);
      });
    });
  });

  describe('Animations', () => {
    it('animates slide transitions', async () => {
      const user = userEvent.setup();
      renderCarousel();
      
      const firstSlide = screen.getByText(mockProjects[0].title).closest('div');
      expect(firstSlide).toHaveStyle('opacity: 1');
      
      await user.click(screen.getByLabelText('Next project'));
      
      await waitFor(() => {
        expect(firstSlide).toHaveStyle('opacity: 0');
      });
    });
  });

  describe('Performance', () => {
    it('optimizes image loading with lazy loading', () => {
      renderCarousel();
      
      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('loading', 'lazy');
      });
    });

    it('cleans up autoplay timer on unmount', () => {
      const { unmount } = renderCarousel();
      
      unmount();
      
      // Ensure no memory leaks from setInterval
      expect(vi.getTimerCount()).toBe(0);
    });
  });

  describe('Accessibility', () => {
    it('provides proper ARIA labels for navigation', () => {
      renderCarousel();
      
      expect(screen.getByLabelText('Previous project')).toHaveAttribute('aria-label');
      expect(screen.getByLabelText('Next project')).toHaveAttribute('aria-label');
    });

    it('manages focus correctly when navigating', async () => {
      const user = userEvent.setup();
      renderCarousel();
      
      const nextButton = screen.getByLabelText('Next project');
      await user.tab();
      
      expect(nextButton).toHaveFocus();
    });

    it('handles keyboard navigation', async () => {
      const user = userEvent.setup();
      renderCarousel();
      
      await user.keyboard('[Space]');
      
      await waitFor(() => {
        expect(screen.getByText(mockProjects[1].title)).toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases', () => {
    it('handles single project gracefully', () => {
      renderCarousel({ projects: [mockProjects[0]] });
      
      expect(screen.queryByLabelText('Next project')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Previous project')).not.toBeInTheDocument();
    });

    it('handles empty projects array', () => {
      renderCarousel({ projects: [] });
      
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('handles missing images', () => {
      const projectsWithoutImages = mockProjects.map(p => ({ ...p, image: undefined }));
      renderCarousel({ projects: projectsWithoutImages });
      
      const placeholderImages = screen.getAllByRole('img');
      placeholderImages.forEach(img => {
        expect(img.src).toContain('/api/placeholder');
      });
    });

    it('handles rapid navigation clicks', async () => {
      const user = userEvent.setup();
      renderCarousel();
      
      const nextButton = screen.getByLabelText('Next project');
      
      // Simulate rapid clicks
      await user.click(nextButton);
      await user.click(nextButton);
      await user.click(nextButton);
      
      // Should end up at the first project again
      await waitFor(() => {
        expect(screen.getByText(mockProjects[0].title)).toBeInTheDocument();
      });
    });
  });

  describe('Responsive Behavior', () => {
    it('maintains aspect ratio on different screens', () => {
      renderCarousel();
      
      const carousel = screen.getByRole('region');
      expect(carousel).toHaveClass('h-[500px]');
    });

    it('adjusts navigation controls for touch devices', () => {
      renderCarousel();
      
      const navigation = screen.getAllByRole('button', { name: /project/i });
      navigation.forEach(button => {
        expect(button).toHaveClass('p-2', 'rounded-full');
      });
    });
  });
});