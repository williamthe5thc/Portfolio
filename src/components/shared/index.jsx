import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { siteMetadata } from '../../data/siteData';

// Shared animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// SEO Component
export const SEO = ({ title, description, type = 'website', image }) => (
  <Helmet>
    <title>{`${title} | ${siteMetadata.author}`}</title>
    <meta name="description" content={description} />
    <meta name="author" content={siteMetadata.author} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    {image && <meta property="og:image" content={image} />}
    <link rel="canonical" href={`${siteMetadata.siteUrl}${window.location.pathname}`} />
  </Helmet>
);

// Page Header Component
export const PageHeader = ({ title, subtitle }) => (
  <motion.section 
    className="py-20 px-4 bg-background-light"
    {...fadeInUp}
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1 
        className="text-5xl font-bold text-text-primary mb-6"
        {...fadeInUp}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          {...fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </motion.section>
);

// Page Layout Component
export const PageLayout = ({ children, className = '' }) => (
  <div className={`min-h-screen bg-gradient-to-b from-background-light to-background ${className}`}>
    {children}
  </div>
);

// Grid Container Component
export const GridContainer = ({ children, cols = "md:grid-cols-2 lg:grid-cols-3" }) => (
  <div className={`grid grid-cols-1 ${cols} gap-8`}>
    {children}
  </div>
);

// Section Container Component
export const SectionContainer = ({ children, className = '' }) => (
  <div className={`max-w-6xl mx-auto ${className}`}>
    {children}
  </div>
);

// Call to Action Component
export const CallToAction = ({ title, subtitle, buttons }) => (
  <motion.section 
    className="py-16 px-4 bg-background-light"
    {...fadeInUp}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-text-primary mb-4">{title}</h2>
      <p className="text-xl text-text-secondary mb-8">{subtitle}</p>
      <div className="flex justify-center gap-4">
        {buttons}
      </div>
    </div>
  </motion.section>
);