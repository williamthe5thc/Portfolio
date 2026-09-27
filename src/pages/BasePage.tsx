// src/pages/BasePage.tsx
/**
 * @file BasePage.tsx
 * @description Base page layout component with consistent structure
 * @module pages
 * 
 * @requires framer-motion - For page transitions
 * @requires @/components/shared - For SEO and layout components
 * 
 * Features:
 * - SEO management
 * - Optional content animation (none by default)
 * - Header handling
 * - Breadcrumb support
 * - Container layout
 * 
 * @example
 * ```tsx
 * <BasePage
 *   seo={{
 *     title: "About Us",
 *     description: "Learn about our company"
 *   }}
 *   title="About Us"
 *   subtitle="Our story and mission"
 *   breadcrumbs={[
 *     { label: "Home", href: "/" },
 *     { label: "About", href: "/about" }
 *   ]}
 * >
 *   <PageContent />
 * </BasePage>
 * ```
 */

import React from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { SEO } from '@/components/shared';
import { Container, PageHeader } from '@/components/layout';
import type { SEOProps } from '@/components/shared';

interface BasePageProps {
  children: React.ReactNode;
  seo: SEOProps;
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href: string; }>;
  className?: string;
  headerContent?: React.ReactNode;
  /** Optional extra entrance animation for the content area. Off by default. */
  animation?: {
    initial?: MotionProps['initial'];
    animate?: MotionProps['animate'];
    exit?: MotionProps['exit'];
    transition?: MotionProps['transition'];
  };
  containerClassName?: string;
}

const BasePage: React.FC<BasePageProps> = ({
  children,
  seo,
  title,
  subtitle,
  breadcrumbs,
  className = '',
  headerContent,
  animation,
  containerClassName = ''
}) => {
  /*
    A <div>, not a <main>: App already renders the page's single <main>, and
    a second one nested inside it gave screen readers two "main" landmarks.
    No default animation either: App's PageTransition already fades each page
    in, and a second fade here multiplied with it.
  */
  const content = <Container>{children}</Container>;

  return (
    <>
      <SEO {...seo} />
      <div className={`min-h-screen ${className}`}>
        {title && (
          <PageHeader
            title={title}
            subtitle={subtitle}
            breadcrumbs={breadcrumbs}
          >
            {headerContent}
          </PageHeader>
        )}
        
        {animation ? (
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={animation.transition}
            className={`flex-grow ${containerClassName}`}
          >
            {content}
          </motion.div>
        ) : (
          <div className={`flex-grow ${containerClassName}`}>
            {content}
          </div>
        )}
      </div>
    </>
  );
};

export default BasePage;
