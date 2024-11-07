// src/components/ui/components.tsx
/**
 * @file components.tsx
 * @description Centralized component type definitions and base implementations
 * for reusable UI components. Includes both TypeScript interfaces and their
 * corresponding React implementations.
 * 
 * Features:
 * - Type-safe component props
 * - Base component implementations
 * - Common UI patterns
 * - Reusable style configurations
 */

import React, { ReactNode, ElementType } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

// ----------------
// Type Definitions
// ----------------

// Utility Types
export type WithClassName<T = {}> = T & { className?: string };
export type WithChildren<T = {}> = T & { children: ReactNode };

// Button Types
export type ButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  loadingText?: string;
}

export type ButtonProps = WithClassName<WithChildren<ButtonBaseProps>> & 
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

// Card Types
export interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  hover?: boolean;
}

// Layout Types
export interface ContainerProps extends WithClassName {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
  center?: boolean;
}

export interface GridProps extends WithClassName {
  columns?: number | { [key: string]: number };
  gap?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
}

// ----------------
// Base Components
// ----------------

// Button Component
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  loadingText,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    ghost: 'text-primary-600 hover:bg-primary-50',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${(isLoading || isDisabled) ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={isLoading || isDisabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin mr-2">⌛</span>
          {loadingText || children}
        </>
      ) : (
        <>
          {LeftIcon && <LeftIcon className="w-4 h-4 mr-2" />}
          {children}
          {RightIcon && <RightIcon className="w-4 h-4 ml-2" />}
        </>
      )}
    </button>
  );
};

// Card Component
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  animate = true,
  hover = true,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg p-6';

  if (!animate) {
    return (
      <div className={`${baseClasses} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={hover ? { y: -5 } : undefined}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Grid Component
export const Grid: React.FC<GridProps> = ({
  children,
  columns = 1,
  gap = 4,
  className = '',
  ...props
}) => {
  const gridCols = typeof columns === 'number' 
    ? `grid-cols-${columns}`
    : Object.entries(columns)
        .map(([bp, cols]) => `${bp}:grid-cols-${cols}`)
        .join(' ');

  return (
    <div 
      className={`grid ${gridCols} gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Export a convenience object for all components
export const Components = {
  Button,
  Card,
  Grid
};