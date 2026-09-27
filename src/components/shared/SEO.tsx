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
import { getBaseUrl } from '@/utils/paths';

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
  keywords?: string[];
  noindex?: boolean;
  language?: string;
  openGraph?: Partial<OpenGraph>;
  twitter?: Partial<Twitter>;
}

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
 * Shareable URL for the current view. The site uses HashRouter, so the route
 * lives after "#/": a path URL such as /Portfolio/about is a GitHub Pages 404.
 */
const shareUrl = (pathname: string): string =>
  pathname === '/' ? `${siteConfig.siteUrl}/` : `${siteConfig.siteUrl}/#${pathname}`;

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image,
  article = false,
  keywords = [],
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
    description: description || siteConfig.description,
    image: absoluteAssetUrl(image || siteConfig.defaultImage),
    url: shareUrl(pathname),
    keywords: [
      "instructional design",
      "elearning development",
      "learning solutions",
      ...keywords
    ].join(", ")
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

  const twitterData: Twitter = {
    // The default image is the square site icon, which suits the small card;
    // a page that passes its own image gets the large one.
    card: image ? 'summary_large_image' : 'summary',
    title: seo.title,
    description: seo.description,
    image: seo.image,
    creator: '@williamthe5thc',
    ...twitter
  };

  /*
    No <link rel="canonical"> here. Crawlers drop the #/ fragment, so every
    route is the same document to them, and the per-route canonical this used
    to emit (siteUrl + pathname) pointed at path URLs that 404. index.html
    carries a single static canonical for the site root.
  */
  return (
    <Helmet
      htmlAttributes={{ lang: language }}
      title={seo.title}
      meta={[
        { name: 'description', content: seo.description },
        { name: 'keywords', content: seo.keywords },
        { name: 'image', content: seo.image },
        { name: 'author', content: siteConfig.author },
        
        // OpenGraph
        { property: 'og:url', content: openGraphData.url },
        { property: 'og:title', content: openGraphData.title },
        { property: 'og:description', content: openGraphData.description },
        { property: 'og:image', content: openGraphData.image },
        // Dimensions are known only for the default image (the 512px icon).
        ...(!image && !openGraph?.image ? [
          { property: 'og:image:width', content: '512' },
          { property: 'og:image:height', content: '512' }
        ] : []),
        { property: 'og:type', content: openGraphData.type },
        { property: 'og:site_name', content: openGraphData.siteName },
        
        // Twitter
        { name: 'twitter:card', content: twitterData.card },
        { name: 'twitter:title', content: twitterData.title },
        { name: 'twitter:description', content: twitterData.description },
        { name: 'twitter:image', content: twitterData.image },
        { name: 'twitter:creator', content: twitterData.creator },
        
        // Additional meta
        ...(noindex ? [
          { name: 'robots', content: 'noindex, nofollow' }
        ] : [])
      ].filter(Boolean)}
    />
  );
};
