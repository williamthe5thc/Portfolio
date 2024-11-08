// src/components/layout/Container.tsx
/**
 * @file Container.tsx
 * @description A collection of container components for layout management
 * and content organization. Provides consistent spacing, padding, and
 * responsive grid layouts throughout the application.
 * 
 * Components:
 * - Container: Basic container with max-width and padding
 * - Section: Full-width section with background options
 * - GridContainer: Responsive grid layout container
 * 
 * Usage:
 * ```tsx
 * <Container>
 *   <h1>Content</h1>
 * </Container>
 * 
 * <Section background="light">
 *   <p>Section content</p>
 * </Section>
 * 
 * <GridContainer cols={{ sm: 1, md: 2, lg: 3 }}>
 *   <Card />
 *   <Card />
 * </GridContainer>
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
      <div className={`${baseClasses} ${className}`} {...props}>
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

/**
 * SectionContainer - A simple wrapper for full-width sections
 * This is a convenience component for basic section layouts
 */
export const SectionContainer: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  ...props 
}) => (
  <Container className={`py-12 ${className}`} {...props}>
    {children}
  </Container>
);