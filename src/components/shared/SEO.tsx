import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/content';

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

interface SEOProps {
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
    title: title ? `${title} | ${siteConfig.title}` : siteConfig.title,
    description: description || siteConfig.description,
    image: `${siteConfig.siteUrl}${image || siteConfig.defaultImage}`,
    url: `${siteConfig.siteUrl}${pathname}`,
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
    siteName: siteConfig.title,
    ...openGraph
  };

  const twitterData: Twitter = {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    image: seo.image,
    creator: '@williamthe5thc',
    ...twitter
  };

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
      link={[
        { rel: 'canonical', href: seo.url }
      ]}
    />
  );
};