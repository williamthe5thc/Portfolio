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
 * - Page transitions
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

import React, {useEffect}  from 'react';
import { motion } from 'framer-motion';
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
  animation?: {
    initial?: object;
    animate?: object;
    exit?: object;
    transition?: object;
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
  animation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  },
  containerClassName = ''
}) => {
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
        
        <motion.main
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
          className={`flex-grow ${containerClassName}`}
        >
          <Container>
            {children}
          </Container>
        </motion.main>
      </div>
    </>
  );
};

export default BasePage;