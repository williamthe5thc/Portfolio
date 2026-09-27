// src/components/layout/PageHeader.tsx
/**
 * @file PageHeader.tsx
 * @description Consistent page header component with breadcrumbs and animations
 * @module components/layout
 * 
 * @requires lucide-react - For breadcrumb icons
 * 
 * Features:
 * - Title and subtitle support
 * - Optional breadcrumb navigation
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
import { ScrollToSection } from '@/components/shared';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';

interface Breadcrumb {
  label: string;
  href: string;
}

export interface PageHeaderProps {
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
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                {breadcrumbs.map((crumb, index) => {
                  const isCurrent = index === breadcrumbs.length - 1;
                  return (
                    <li key={index} className="flex items-center">
                      {index > 0 && (
                        <ChevronRight className="w-4 h-4 mx-2 text-text-light" aria-hidden="true" />
                      )}
                      {isCurrent ? (
                        <span aria-current="page" className="text-text-primary font-medium">
                          {crumb.label}
                        </span>
                      ) : (
                        <ScrollToSection
                          to={crumb.href}
                          className="hover:text-primary-600 transition-colors text-text-secondary"
                        >
                          {crumb.label}
                        </ScrollToSection>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {/*
            Title and Subtitle. No entrance fade of its own: App's
            PageTransition already fades the page in, and a second fade here
            multiplied with it. Smaller on phones so single long words
            ("Implementation") don't overflow a 320px screen.
          */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4 break-words">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-text-secondary">
                {subtitle}
              </p>
            )}
          </div>

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
