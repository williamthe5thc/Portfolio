/**
 * @file SEO.tsx
 * @description Per-page document head: title, description, Open Graph and Twitter tags
 * @module components/shared
 *
 * @requires react-helmet-async - HelmetProvider is mounted in main.tsx
 *
 * App renders one <SEO /> with no props, so every route has the site-wide
 * title, description and lang even when a page sets nothing. A page's own
 * <SEO title="..." /> is mounted later and overrides those values.
 *
 * @example
 * ```tsx
 * <SEO title="About" description="How I approach instructional design" />
 * <SEO title="Page not found" noindex />
 * ```
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/content';
import { getBaseUrl, routePath } from '@/utils/paths';

interface OpenGraph {
  title: string;
  description: string;
  image: string;
  url: string;
  type: 'website' | 'article';
  siteName?: string;
  locale?: string;
}

interface Twitter {
  card: 'summary' | 'summary_large_image';
  title: string;
  description: string;
  image: string;
  creator?: string;
  site?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
  language?: string;
  openGraph?: Partial<OpenGraph>;
  twitter?: Partial<Twitter>;
}

/**
 * Search and share description for pages that don't set their own, the home
 * page included. Same text as the static tag in index.html, which crawlers
 * read before the app runs; change both together.
 */
const DEFAULT_DESCRIPTION =
  'Portfolio of W. Jordan Charles: instructional design, learning experience design and learning technology. Case studies, interactive demos and resumes.';

/** Words on the default share image (public/og-image.jpg). */
const DEFAULT_IMAGE_ALT =
  'W. Jordan Charles, Instructional Designer. Needs analysis, course design, LMS implementation. M.Ed., University of Utah.';

/**
 * Absolute URL for a public asset. Accepts a full URL, a path relative to the
 * public folder ("/images/x.png"), or a getImagePath() result that already
 * carries the deploy base ("/Portfolio/images/x.png"); the base is stripped so
 * it is not doubled against siteUrl.
 */
const absoluteAssetUrl = (path: string): string => {
  if (/^https?:\/\//i.test(path)) return path;
  const base = getBaseUrl();
  const relative = base !== '/' && path.startsWith(base)
    ? path.slice(base.length)
    : path.replace(/^\/+/, '');
  return `${siteConfig.siteUrl}/${relative}`;
};

/**
 * Canonical and shareable URL for the current page, in the trailing-slash
 * form GitHub Pages serves it at (siteUrl + "/about/"). The query and
 * fragment are left out: a filtered portfolio is still the portfolio page.
 * The build writes the same URL into each page's static copy.
 */
const pageUrl = (pathname: string): string => `${siteConfig.siteUrl}${routePath(pathname)}`;

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image,
  article = false,
  noindex = false,
  language = 'en',
  openGraph,
  twitter
}) => {
  const { pathname } = useLocation();
  const seo = {
    // Short suffix: the full site title after every page name pushed project
    // titles past 110 characters in tabs and search results.
    title: title ? `${title} | ${siteConfig.author}` : siteConfig.title,
    description: description || DEFAULT_DESCRIPTION,
    image: absoluteAssetUrl(image || siteConfig.defaultImage),
    url: pageUrl(pathname),
  };

  const openGraphData: OpenGraph = {
    title: seo.title,
    description: seo.description,
    image: seo.image,
    url: seo.url,
    type: article ? 'article' : 'website',
    siteName: `${siteConfig.author} Portfolio`,
    ...openGraph
  };

  // The default share image is a 1200x630 card, so every page gets the large
  // preview. No twitter:creator: the X account is deliberately not linked.
  const twitterData: Twitter = {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    image: seo.image,
    ...twitter
  };
  const usesDefaultImage = !image && !openGraph?.image;

  /*
    The canonical tag in index.html and in each page's static copy carries
    data-rh, so this one replaces it rather than adding a second.
  */
  return (
    <Helmet
      htmlAttributes={{ lang: language }}
      title={seo.title}
      link={[{ rel: 'canonical', href: seo.url }]}
      meta={[
        { name: 'description', content: seo.description },
        { name: 'author', content: siteConfig.author },
        
        // OpenGraph
        { property: 'og:url', content: openGraphData.url },
        { property: 'og:title', content: openGraphData.title },
        { property: 'og:description', content: openGraphData.description },
        { property: 'og:image', content: openGraphData.image },
        // Size and alt text are known only for the default image.
        ...(usesDefaultImage ? [
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: DEFAULT_IMAGE_ALT }
        ] : []),
        { property: 'og:type', content: openGraphData.type },
        { property: 'og:site_name', content: openGraphData.siteName },
        
        // Twitter
        { name: 'twitter:card', content: twitterData.card },
        { name: 'twitter:title', content: twitterData.title },
        { name: 'twitter:description', content: twitterData.description },
        { name: 'twitter:image', content: twitterData.image },
        ...(usesDefaultImage ? [{ name: 'twitter:image:alt', content: DEFAULT_IMAGE_ALT }] : []),
        ...(twitterData.creator ? [{ name: 'twitter:creator', content: twitterData.creator }] : []),
        
        // Additional meta
        ...(noindex ? [
          { name: 'robots', content: 'noindex, nofollow' }
        ] : [])
      ].filter(Boolean)}
    />
  );
};
