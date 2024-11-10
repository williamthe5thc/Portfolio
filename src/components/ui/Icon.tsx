// src/components/ui/Icon.tsx
// For /ui/Icon.tsx
/**
 * @file Icon.tsx
 * @description Type-safe icon component wrapper for Lucide icons
 * @module components/ui
 * 
 * @requires lucide-react - For icon components
 * 
 * Features:
 * - Type-safe icon name validation
 * - Consistent sizing and coloring
 * - Optional click handling
 * - Error handling for invalid icons
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="ArrowRight" />
 * 
 * // With custom size and color
 * <Icon 
 *   name="Heart"
 *   size={24}
 *   color="red"
 *   className="hover:opacity-80"
 * />
 * 
 * // With click handler
 * <Icon 
 *   name="Bell"
 *   onClick={() => console.log('clicked')}
 * />
 * ```
 * 
 * @notes
 * - Validates icon names at runtime
 * - Provides TypeScript autocompletion for icon names
 * - Falls back gracefully if icon not found
 */

import React, { createElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

export interface IconProps {
  name: keyof typeof Icons;
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  size, 
  color,
  onClick 
}) => {
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return createElement(IconComponent, { 
    className,
    size: size || 24,
    color,
    onClick
  });
};

export const isValidIconName = (name: string): name is keyof typeof Icons => {
  return name in Icons;
};