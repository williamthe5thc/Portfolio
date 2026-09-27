// src/components/layout/Container.tsx
/**
 * @file Container.tsx
 * @description Layout container components for consistent spacing and structure
 * @module components/layout
 * 
 * Components:
 * - Container: Basic container with max-width and padding
 * - Section: Full-width section with background options
 * - GridContainer: Responsive grid layout container
 * - SectionContainer: Convenience wrapper for sections
 * 
 * Features:
 * - Responsive padding and margins
 * - Background color variants
 * - Grid system integration
 * - Animation support
 * 
 * @example
 * ```tsx
 * // Basic container
 * <Container>
 *   <Content />
 * </Container>
 * 
 * // Grid container
 * <GridContainer cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
 *   <Card />
 *   <Card />
 *   <Card />
 * </GridContainer>
 * 
 * // Section with background
 * <Section background="primary" paddingY="lg">
 *   <Content />
 * </Section>
 * ```
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

// Base Container Props
export interface ContainerBaseProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

// Container Component Props
export interface ContainerProps extends ContainerBaseProps, 
  Omit<HTMLMotionProps<'div'>, keyof ContainerBaseProps> {}

// Section Component Props
export interface SectionProps extends ContainerProps {
  background?: 'light' | 'dark' | 'primary' | 'none';
  paddingY?: 'none' | 'sm' | 'md' | 'lg';
}

// Grid Container Props
export interface GridContainerProps extends ContainerProps {
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
}

// Basic Container Component
export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  animate = false,
  ...props
}) => {
  const baseClasses = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
  
  if (!animate) {
    return (
      <div
        className={`${baseClasses} ${className}`}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div 
      className={`${baseClasses} ${className}`}
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Section Component
export const Section: React.FC<SectionProps> = ({
  background = 'none',
  paddingY = 'md',
  className = '',
  children,
  ...props
}) => {
  const bgClasses = {
    light: 'bg-background-light',
    dark: 'bg-background-dark',
    primary: 'bg-primary-50',
    none: ''
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24'
  };

  return (
    <section className={`${bgClasses[background]} ${paddingClasses[paddingY]}`}>
      <Container className={className} {...props}>
        {children}
      </Container>
    </section>
  );
};

// Grid Container Component
export const GridContainer: React.FC<GridContainerProps> = ({
  cols = {
    sm: 1,
    md: 2,
    lg: 3
  },
  gap = 'md',
  className = '',
  children,
  ...props
}) => {
  const colClasses = [
    'grid',
    cols.sm && `grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  ].filter(Boolean).join(' ');

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  return (
    <Container 
      className={`${colClasses} ${gapClasses[gap]} ${className}`} 
      {...props}
    >
      {children}
    </Container>
  );
};

// Export a constant for container padding class
export const containerPadding = 'px-4 sm:px-6 lg:px-8';

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  /** Tinted band that runs out to the edges of the page container. */
  tinted?: boolean;
}

/**
 * SectionContainer - vertical spacing for a section of a page.
 *
 * Deliberately NOT a Container. Every page already sits inside BasePage's
 * <Container>, so making this one too (and pages then adding a third inside
 * it) stacked the max-width and side padding: on a 390px phone the About
 * page's text started 48px in instead of 16px. It adds vertical padding only;
 * `py-12` is the default, and a `py-*` in className replaces it rather than
 * competing with it. `tinted` pulls the background out over the container's
 * side padding (and pads the content back in), so the band has a margin
 * around the text without indenting it past the rest of the page.
 */
export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  tinted = false,
  ...props
}) => {
  const paddingY = /(^|\s)py-/.test(className) ? '' : 'py-12';
  const band = tinted
    ? 'bg-background -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'
    : '';

  return (
    <section className={`${paddingY} ${band} ${className}`} {...props}>
      {children}
    </section>
  );
};