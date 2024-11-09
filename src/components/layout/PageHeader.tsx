// src/components/layout/PageHeader.tsx
/**
 * @file PageHeader.tsx
 * @description Consistent page header component with breadcrumbs and animations
 * @module components/layout
 * 
 * @requires framer-motion - For entrance animations
 * @requires lucide-react - For breadcrumb icons
 * 
 * Features:
 * - Title and subtitle support
 * - Optional breadcrumb navigation
 * - Animated entrance
 * - Responsive design
 * - Custom background support
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <PageHeader 
 *   title="About Us"
 *   subtitle="Learn more about our company"
 * />
 * 
 * // With breadcrumbs
 * <PageHeader 
 *   title="Project Details"
 *   breadcrumbs={[
 *     { label: "Projects", href: "/projects" },
 *     { label: "Project Name", href: "/projects/123" }
 *   ]}
 * />
 * ```
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  className = '',
  children
}) => {
  return (
    <header className={`bg-gradient-to-b from-background-light to-background py-12 ${className}`}>
      <Container>
        <div className="max-w-4xl">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex items-center space-x-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight className="w-4 h-4 mx-2 text-text-light" />
                    )}
                    <Link
                      to={crumb.href}
                      className={`hover:text-primary-600 transition-colors ${
                        index === breadcrumbs.length - 1
                          ? 'text-text-primary font-medium'
                          : 'text-text-secondary'
                      }`}
                    >
                      {crumb.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-text-secondary">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Optional additional content */}
          {children && (
            <div className="mt-6">
              {children}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default PageHeader;