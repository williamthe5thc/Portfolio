//tests/pages/ProjectDetailPage.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render as rtlRender, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, useParams, useNavigate } from 'react-router-dom';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import { projects, projectCategories } from '@/content';
import { documentHref } from '@/utils';

/*
  The page reads its project from the content by id, so tests use the real
  projects. Cases that edited a copy of a project (and so never reached the
  page) are it.todo below. The page's <SEO> needs a HelmetProvider, as in
  main.tsx; App, not the page, renders <main>.
*/
const render = (ui: React.ReactElement) =>
  rtlRender(<HelmetProvider>{ui}</HelmetProvider>);

// The hero is the first image in the story card.
const heroImage = () => document.querySelector('img') as HTMLImageElement;

// Mock router hooks
vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<typeof import('react-router-dom')>('react-router-dom')),
  useParams: vi.fn(),
  useNavigate: vi.fn(),
  useLocation: () => ({ pathname: '/portfolio/test-project' })
}));

describe('ProjectDetailPage', () => {
  const mockNavigate = vi.fn();
  const mockProject = projects[0];

  beforeEach(() => {
    vi.clearAllMocks();
    (useParams as any).mockReturnValue({ projectId: mockProject.id });
    (useNavigate as any).mockReturnValue(mockNavigate);
  });

  describe('Project Loading', () => {
    it('loads project details successfully', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(mockProject.title);
      expect(screen.getByText(mockProject.description)).toBeInTheDocument();
      // alt is imageAlt (the text baked into the graphic), not the title,
      // which the h1 already says.
      expect(heroImage()).toHaveAttribute('src', mockProject.image);
      expect(heroImage()).toHaveAttribute('alt', mockProject.imageAlt ?? '');
    });

    it('redirects to portfolio on invalid project ID', () => {
      (useParams as any).mockReturnValue({ projectId: 'invalid-id' });
      
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      expect(mockNavigate).toHaveBeenCalledWith('/portfolio', { replace: true });
    });

    it.todo('handles missing project data gracefully (needs a fixture project the page can load)');
  });

  describe('Project Content Display', () => {
    it('displays project metadata', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      // Category and status are shown as labels, not raw ids.
      const label = projectCategories.find(c => c.id === mockProject.category)?.label;
      const details = screen.getByText('Project Details').parentElement!;
      expect(within(details).getByText(label!)).toBeInTheDocument();
      expect(within(details).getByText(mockProject.date)).toBeInTheDocument();
      expect(within(details).getByText('Completed')).toBeInTheDocument();
      expect(within(details).queryByText(mockProject.category)).not.toBeInTheDocument();
    });

    it('renders project challenges and solutions', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      mockProject.challenges?.forEach(challenge => {
        expect(screen.getByText(challenge)).toBeInTheDocument();
      });
      
      // Markdown links in a solution render as anchors, so match the text
      // before any link.
      mockProject.solutions?.forEach(solution => {
        const plain = solution.split('[')[0].trim();
        expect(screen.getAllByText(text => text.includes(plain)).length).toBeGreaterThan(0);
      });
    });

    it('displays technology tags', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      mockProject.tags.forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });
  });

  describe('Project Navigation', () => {
    it('handles back button click', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      // Arrived without a portfolio entry in router state (a shared link):
      // push a fresh /portfolio rather than going back out of the site.
      const backButton = screen.getByRole('button', { name: /back to portfolio/i });
      await user.click(backButton);

      expect(mockNavigate).toHaveBeenCalledWith('/portfolio');
    });

    it('displays the project document link when available', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      // Rendered twice (under the hero on phones, in the sidebar from md
      // up). A PDF says so, opens fitted to the page width, and announces
      // the new tab.
      const links = screen.getAllByRole('link', { name: /^view document \(pdf\) \(opens in a new tab\)$/i });
      expect(links.length).toBeGreaterThanOrEqual(2);
      const link = links[0];
      expect(link).toHaveAttribute('href', documentHref(mockProject.projectUrl!));
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Layout and Styling', () => {
    it('maintains responsive grid layout', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const grid = document.querySelector('.grid.md\\:grid-cols-3');
      expect(grid).toHaveClass('grid', 'md:grid-cols-3', 'gap-8');
    });

    it('applies proper image sizing', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      // Natural size capped by a fixed-height box, which reserves the space
      // before the image loads.
      const image = heroImage();
      expect(image).toHaveClass('max-w-full', 'max-h-full', 'rounded-lg');
      expect(image.parentElement).toHaveClass('h-48', 'sm:h-72');
    });

    it.todo('handles long content gracefully (needs a fixture project the page can load)');
  });

  describe('Performance Optimizations', () => {
    it('fetches the hero image first', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      // The hero is the page's first visible image (its LCP candidate), so
      // it is eager and high priority rather than lazy.
      const image = heroImage();
      expect(image).toHaveAttribute('loading', 'eager');
      expect(image).toHaveAttribute('fetchpriority', 'high');
      expect(image).toHaveAttribute('decoding', 'async');
    });

    it('memoizes content to prevent unnecessary rerenders', async () => {
      const { container, rerender } = render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const initialContent = container.innerHTML;

      rerender(
        <HelmetProvider>
          <MemoryRouter>
            <ProjectDetailPage />
          </MemoryRouter>
        </HelmetProvider>
      );

      expect(container.innerHTML).toBe(initialContent);
    });
  });

  describe('Error Handling', () => {
    // The page has no error alert of its own; a throw reaches the route's
    // ErrorBoundary in App.
    it.todo('handles navigation errors gracefully');

    // Every active project has an image; a project without one renders no
    // hero at all (there is no placeholder image).
    it.todo('handles missing images (needs a fixture project the page can load)');
  });

  describe('Accessibility', () => {
    it('maintains proper heading hierarchy', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent(mockProject.title);
      
      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('provides proper navigation landmarks', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      // App renders the one <main>; the page adds only the breadcrumb nav.
      expect(screen.queryByRole('main')).not.toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument();
    });

    it('ensures images have alt text', () => {
      render(
        <MemoryRouter>
          <ProjectDetailPage />
        </MemoryRouter>
      );

      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
      });
    });
  });
});