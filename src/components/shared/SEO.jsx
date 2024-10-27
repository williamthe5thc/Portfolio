// src/components/shared/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { siteMetadata } from '../../data/siteData';

export const SEO = ({ 
  title, 
  description, 
  type = 'website', 
  image,
  keywords = [],
  noindex = false 
}) => {
  const pageTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const metaImage = image || siteMetadata.defaultImage;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      {metaImage && <meta property="og:image" content={metaImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": siteMetadata.author,
          "url": siteMetadata.siteUrl,
          "sameAs": [
            siteMetadata.social?.linkedin,
            siteMetadata.social?.github,
          ].filter(Boolean),
          "jobTitle": "Instructional Designer",
          "description": siteMetadata.description,
        })}
      </script>
    </Helmet>
  );
};