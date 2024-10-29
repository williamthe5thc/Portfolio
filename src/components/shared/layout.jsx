// src/components/shared/layout.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Helmet } from 'react-helmet';
import { fadeInUp } from './animations';
import { navigation, siteMetadata } from '../../data/siteData';

// Navigation Component
export const Navigation = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <NavLink to="/" className="font-bold text-xl text-text-primary hover:text-primary-600">
          W. Jordan Charles
        </NavLink>
        <div className="hidden md:flex space-x-4">
          {navigation.map(({ path, label, icon }) => {
            const Icon = Icons[icon];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `
                  px-3 py-2 rounded-md flex items-center gap-2
                  ${isActive ? 'text-primary-600 bg-primary-50' : 'text-text-secondary hover:text-primary-600'}
                `}
                end={path === "/"} // Add this to ensure exact matching for home route
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  </nav>
);

// Page Header Component
export const PageHeader = ({ title, subtitle }) => (
  <motion.section 
    className="py-20 px-4 bg-background-light"
    variants={fadeInUp}
    initial="initial"
    animate="animate"
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1 
        className="text-5xl font-bold text-text-primary mb-6"
        variants={fadeInUp}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          className="text-xl text-text-secondary max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </motion.section>
);

// Container Components
export const PageLayout = ({ children, className = '' }) => (
  <div className={`min-h-screen bg-gradient-to-b from-background-light to-background ${className}`}>
    {children}
  </div>
);

export const GridContainer = ({ 
  children, 
  cols = "md:grid-cols-2 lg:grid-cols-3",
  className = '' 
}) => (
  <div className={`grid grid-cols-1 ${cols} gap-8 ${className}`}>
    {children}
  </div>
);

export const SectionContainer = ({ children, className = '' }) => (
  <div className={`max-w-6xl mx-auto px-4 ${className}`}>
    {children}
  </div>
);

// Call to Action Component
export const CallToAction = ({ title, subtitle, buttons }) => (
  <motion.section 
    className="py-16 px-4 bg-background-light"
    variants={fadeInUp}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-text-primary mb-4">{title}</h2>
      <p className="text-xl text-text-secondary mb-8">{subtitle}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {buttons}
      </div>
    </div>
  </motion.section>
);

// Timeline Component
// src/components/shared/layout.jsx
// Only modify the Timeline component, keep everything else the same

export const Timeline = ({ events }) => {
  // Add safety check
  const safeEvents = Array.isArray(events) ? events : [];
  
  if (safeEvents.length === 0) {
    return null;
  }

  return (
    <div className="relative space-y-8">
      {safeEvents.map((event, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="flex gap-4"
        >
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-primary-600 rounded-full" />
            {index !== safeEvents.length - 1 && (
              <div className="w-0.5 h-full bg-primary-200" />
            )}
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h4 className="font-semibold text-text-primary">{event?.title}</h4>
            {event?.date && <p className="text-text-light text-sm">{event.date}</p>}
            {event?.description && <p className="text-text-secondary mt-2">{event.description}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
// SEO Component
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

// Section Header Component
export const SectionHeader = ({ title, subtitle, className = '' }) => (
  <motion.div
    className={`text-center mb-12 ${className}`}
    variants={fadeInUp}
  >
    <h2 className="text-3xl font-bold text-text-primary mb-4">{title}</h2>
    {subtitle && (
      <p className="text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
    )}
  </motion.div>
);

// Divider Component
export const Divider = ({ className = '' }) => (
  <hr className={`border-t border-gray-200 my-8 ${className}`} />
);