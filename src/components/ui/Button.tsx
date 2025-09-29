// src/components/ui/Button.tsx
/**
 * @file Button.tsx
 * @description A reusable button component with multiple variants, sizes, and states
 * @module components/ui
 * 
 * @requires framer-motion - For hover/tap animations
 * @requires lucide-react - For icon support
 * @requires react-router-dom - For internal link support
 * 
 * Features:
 * - Multiple variants (primary, secondary, outline, ghost, danger)
 * - Different sizes (sm, md, lg)
 * - Loading state
 * - Icon support (left/right)
 * - Link capability
 * - Analytics tracking
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Button variant="primary" size="md">Click me</Button>
 * 
 * // With icon and loading state
 * <Button 
 *   variant="primary"
 *   icon={ArrowRight}
 *   isLoading={isLoading}
 * >
 *   Submit
 * </Button>
 * ```
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  isLoading?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string; // Add id prop for analytics tracking
  analyticsLabel?: string; // Optional label for better analytics tracking
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  isLoading = false,
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  id,
  analyticsLabel,
  ...props
}) => {
  const { trackEngagement } = useAnalytics();

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    custom: '' // No default styles for custom variant
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const handleInteraction = (actionType: 'click' | 'link' = 'click') => {
    trackEngagement(
      id || analyticsLabel || 'unknown',
      'button',
      actionType,
      {
        button_variant: variant,
        button_text: typeof children === 'string' ? children : analyticsLabel,
        button_type: type,
        button_href: href
      }
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoading && !disabled) {
      handleInteraction('click');
      onClick?.(e);
    }
  };

  const buttonContent = (
    <>
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {Icon && <Icon className="w-4 h-4 mr-2" />}
          {children}
        </>
      )}
    </>
  );

  const commonClassNames = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${(isLoading || disabled) ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Internal link using React Router
  if (href?.startsWith('/')) {
    return (
      <Link
        to={href}
        className={commonClassNames}
        onClick={() => handleInteraction('link')}
      >
        {buttonContent}
      </Link>
    );
  }

  // External link
  if (href && !href.startsWith('/')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClassNames}
        onClick={() => handleInteraction('link')}
      >
        {buttonContent}
      </a>
    );
  }

  // Regular button
  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={isLoading || disabled}
      className={commonClassNames}
      whileHover={!(isLoading || disabled) ? { scale: 1.02 } : {}}
      whileTap={!(isLoading || disabled) ? { scale: 0.98 } : {}}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;