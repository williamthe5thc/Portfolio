// src/components/ui/index.ts
/**
 * @file index.ts
 * @description UI component library entry point
 * @module components/ui
 * 
 * Exports:
 * - Core components (Button, Card, etc.)
 * - Form components (Input, TextArea, etc.)
 * - Display components (Badge, Alert, etc.)
 * - Layout components (Container, Grid, etc.)
 * 
 * Features:
 * - Named exports for all UI components
 * - Type exports for component props
 * - Barrel file pattern for clean imports
 * 
 * @example
 * ```tsx
 * // Import multiple UI components
 * import { 
 *   Button,
 *   Card,
 *   Badge,
 *   Input
 * } from '@/components/ui';
 * 
 * // Import specific types
 * import type { 
 *   ButtonProps,
 *   CardProps 
 * } from '@/components/ui';
 * ```
 * 
 * @notes
 * - Use named imports for better tree-shaking
 * - All components have proper TypeScript definitions
 */
// Core Components
export { Button  } from './Button'; 
export { BackToTop } from './BackToTop';
export { Badge } from './Badge';

//export the cards
export { BaseCard, CoreCompetency, JourneyCard, StatsGrid, PhilosophyCard } from './Card.jsx';
export type {
  CoreCompetencyProps,
  JourneyItemProps,
  JourneyCardProps,
  PhilosophyCardProps,
  StatsItemProps,
  StatsGridProps,
} from './Card.tsx';

// Form Components
export { Input } from './Input';
export { TextArea } from './TextArea';
export { FormField } from './FormField';
export { ContactMethod } from './ContactMethod';


// Types
export type { ButtonProps } from './Button';
export type { CardProps } from './Card';
export type { InputProps } from './Input';
export type { TextAreaProps } from './TextArea';
export type { FormFieldProps } from './FormField';
export type { BackToTopProps } from './BackToTop';
export type { BadgeProps } from './Badge';
export type { ContactMethodProps } from './ContactMethod';