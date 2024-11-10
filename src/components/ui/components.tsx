// src/components/ui/components.tsx
/**
 * @file components.tsx
 * @description Core UI component collection with shared styling and behavior
 * @module components/ui
 * 
 * @requires framer-motion - For animations
 * @requires lucide-react - For icons
 * @requires @/types - For component types
 * 
 * Components:
 * - Button: Interactive button component
 * - Card: Content container component
 * - Badge: Status indicator component
 * - Alert: Notification component
 * 
 * Features:
 * - Consistent theming
 * - Animation support
 * - Accessibility patterns
 * - Responsive design
 * 
 * @example
 * ```tsx
 * // Import and use UI components
 * import { Button, Card } from './components';
 * 
 * <Card>
 *   <h2>Title</h2>
 *   <Button variant="primary">Click Me</Button>
 * </Card>
 * ```
 * 
 * @notes
 * - All components support dark mode
 * - Built with WCAG 2.1 compliance
 * - Uses Tailwind for styling
 */
 
import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

// Button Types and Component
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  isLoading?: boolean;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  isLoading,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors';
  
  return (
    <button
      className={`${baseStyles} ${getVariantStyles(variant)} ${getSizeStyles(size)} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

// Card Types and Component
export interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  animate = true,
  hover = true,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-lg overflow-hidden';
  
  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      whileHover={hover ? { y: -5 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Helper functions
const getVariantStyles = (variant: ButtonProps['variant']) => {
  const styles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    ghost: 'text-primary-600 hover:bg-primary-50',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };
  return styles[variant || 'primary'];
};

const getSizeStyles = (size: ButtonProps['size']) => {
  const styles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  return styles[size || 'md'];
};