// src/components/layout/Container.tsx

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface ContainerBaseProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

type ContainerProps = ContainerBaseProps & 
  Omit<HTMLMotionProps<'div'>, keyof ContainerBaseProps>;

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

interface SectionProps extends ContainerProps {
  background?: 'light' | 'dark' | 'primary' | 'none';
  paddingY?: 'none' | 'sm' | 'md' | 'lg';
}

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

interface GridContainerProps extends ContainerProps {
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
}

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