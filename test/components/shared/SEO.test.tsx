//tests/components/shared/SEO.test.tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SEO } from '@/components/shared/SEO';
import { siteConfig } from '@/content';

// Mock router
vi.mock('react-router-dom', () => ({
  useLocation: vi.fn()
}));

describe('SEO', () => {
  const helmetContext = {};
  const mockLocation = {
    pathname: '/test-page',
    search: '',
    hash: '',
    state: null
  };

  beforeEach(() => {
    (useLocation as jest.Mock).mockReturnValue(mockLocation);
  });

  const renderWithHelmet = (component: React.ReactElement) => {
    return render(
      <HelmetProvider context={helmetContext}>
        {component}
      </HelmetProvider>
    );
  };

  describe('Basic Meta Tags', () => {
    it('sets default meta tags', async () => {
      renderWithHelmet(<SEO />);

      await waitFor(() => {
        expect(document.title).toBe(siteConfig.title);
        expect(document.querySelector('meta[name="description"]')?.getAttribute('content'))
          .toBe(siteConfig.description);
      });
    });

    it('sets custom title and description', async () => {
      const customProps = {
        title: 'Custom Title',
        description: 'Custom description'
      };

      renderWithHelmet(<SEO {...customProps} />);

      await waitFor(() => {
        expect(document.title).toBe(`${customProps.title} | ${siteConfig.title}`);
        expect(document.querySelector('meta[name="description"]')?.getAttribute('content'))
          .toBe(customProps.description);
      });
    });

    it('handles keywords', async () => {
      const keywords = ['test', 'seo', 'keywords'];
      renderWithHelmet(<SEO keywords={keywords} />);

      await waitFor(() => {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        expect(metaKeywords?.getAttribute('content')).toContain(keywords.join(', '));
      });
    });
  });

  describe('OpenGraph Tags', () => {
    it('sets default OpenGraph tags', async () => {
      renderWithHelmet(<SEO />);

      await waitFor(() => {
        expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content'))
          .toBe(siteConfig.title);
        expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content'))
          .toBe('website');
        expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content'))
          .toBe(`${siteConfig.siteUrl}${mockLocation.pathname}`);
      });
    });

    it('sets article OpenGraph type when specified', async () => {
      renderWithHelmet(<SEO article={true} />);

      await waitFor(() => {
        expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content'))
          .toBe('article');
      });
    });

    it('handles custom OpenGraph data', async () => {
      const openGraph = {
        title: 'Custom OG Title',
        description: 'Custom OG Description',
        image: 'custom-image.jpg'
      };

      renderWithHelmet(<SEO openGraph={openGraph} />);

      await waitFor(() => {
        expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content'))
          .toBe(openGraph.title);
        expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content'))
          .toBe(openGraph.description);
        expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content'))
          .toContain(openGraph.image);
      });
    });
  });

  describe('Twitter Cards', () => {
    it('sets default Twitter card tags', async () => {
      renderWithHelmet(<SEO />);

      await waitFor(() => {
        expect(document.querySelector('meta[name="twitter:card"]')?.getAttribute('content'))
          .toBe('summary_large_image');
        expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content'))
          .toBe(siteConfig.title);
      });
    });

    it('handles custom Twitter data', async () => {
      const twitter = {
        card: 'summary' as const,
        title: 'Custom Twitter Title',
        description: 'Custom Twitter Description'
      };

      renderWithHelmet(<SEO twitter={twitter} />);

      await waitFor(() => {
        expect(document.querySelector('meta[name="twitter:card"]')?.getAttribute('content'))
          .toBe(twitter.card);
        expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute('content'))
          .toBe(twitter.title);
        expect(document.querySelector('meta[name="twitter:description"]')?.getAttribute('content'))
          .toBe(twitter.description);
      });
    });
  });

  describe('Language and Robots', () => {
    it('sets correct language attribute', async () => {
      renderWithHelmet(<SEO language="es" />);

      await waitFor(() => {
        expect(document.documentElement).toHaveAttribute('lang', 'es');
      });
    });

    it('handles noindex directive', async () => {
      renderWithHelmet(<SEO noindex={true} />);

      await waitFor(() => {
        expect(document.querySelector('meta[name="robots"]')?.getAttribute('content'))
          .toBe('noindex, nofollow');
      });
    });
  });

  describe('Canonical Links', () => {
    it('sets canonical URL', async () => {
      renderWithHelmet(<SEO />);

      await waitFor(() => {
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        expect(canonicalLink?.getAttribute('href'))
          .toBe(`${siteConfig.siteUrl}${mockLocation.pathname}`);
      });
    });
  });

  describe('Error Handling', () => {
    it('handles missing image urls gracefully', async () => {
      renderWithHelmet(<SEO image="" />);

      await waitFor(() => {
        const ogImage = document.querySelector('meta[property="og:image"]');
        expect(ogImage?.getAttribute('content')).toBe(siteConfig.defaultImage);
      });
    });

    it('sanitizes user-provided content', async () => {
      const maliciousScript = '<script>alert("xss")</script>';
      renderWithHelmet(<SEO title={maliciousScript} />);

      await waitFor(() => {
        expect(document.title).not.toContain('<script>');
      });
    });
  });
});
