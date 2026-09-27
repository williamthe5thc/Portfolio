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
  /**
   * Link target, honoured by every link form. External URLs default to
   * "_blank"; internal routes and site files open in the same tab unless set.
   */
  target?: React.HTMLAttributeAnchorTarget;
  /** Link rel. Defaults to "noopener noreferrer" whenever target is "_blank". */
  rel?: string;
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
  target,
  rel,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  id,
  analyticsLabel,
  ...props
}) => {
  const { trackEngagement } = useAnalytics();

  // One keyboard focus indicator for every variant: a 2px primary-600 ring
  // sandwiched between white (the ring offset inside, a white outline
  // outside). The blue ring then always sits on white (6.7:1), so the
  // indicator stays visible on light pages and on the dark primary bands,
  // including a white button on a blue band where a plain ring disappears.
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
  
  // Every variant has the same 2px border (transparent when filled) so that
  // primary and outline buttons side by side are the same size. Text
  // contrast: primary 6.7:1 (8.7:1 hover), secondary 7.2:1, outline and
  // ghost 6.7:1 on white, danger 4.8:1.
  const variants = {
    primary: 'border-2 border-transparent bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'border-2 border-transparent bg-primary-100 hover:bg-primary-200 text-primary-700',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    ghost: 'border-2 border-transparent text-primary-600 hover:bg-primary-50',
    danger: 'border-2 border-transparent bg-red-600 hover:bg-red-700 text-white',
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

  // Internal link using React Router.
  //
  // A leading slash alone is not enough to identify an in-app route. Asset
  // paths are absolute too - getImagePath() returns "/Portfolio-Staging/
  // documents/Coding_Resume.pdf" - and handing one of those to <Link> under
  // HashRouter turns a PDF download into "#/Portfolio-Staging/documents/
  // Coding_Resume.pdf", a route that matches nothing and renders the 404 page.
  // A trailing file extension is what separates a file from a route.
  const isFileLink = /\.[a-z0-9]{2,5}(?:$|[?#])/i.test(href ?? '');

  // An explicit rel wins; otherwise a new tab always gets noopener noreferrer.
  const relFor = (linkTarget?: string) =>
    rel ?? (linkTarget === '_blank' ? 'noopener noreferrer' : undefined);

  if (href?.startsWith('/') && !isFileLink) {
    return (
      <Link
        to={href}
        target={target}
        rel={relFor(target)}
        className={commonClassNames}
        onClick={() => handleInteraction('link')}
      >
        {buttonContent}
      </Link>
    );
  }

  // Absolute path to a real file (PDF, demo page): plain anchor. Same tab by
  // default like any other download link; callers pass target="_blank" for
  // demos and documents so the portfolio stays open behind them.
  if (href?.startsWith('/') && isFileLink) {
    return (
      <a
        href={href}
        target={target}
        rel={relFor(target)}
        className={commonClassNames}
        onClick={() => handleInteraction('link')}
      >
        {buttonContent}
      </a>
    );
  }

  // External link: new tab unless the caller says otherwise
  if (href && !href.startsWith('/')) {
    const externalTarget = target ?? '_blank';
    return (
      <a
        href={href}
        target={externalTarget}
        rel={relFor(externalTarget)}
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