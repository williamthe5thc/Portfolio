// src/components/ui/index.ts
/**
 * @file index.ts
 * @description UI component library entry point
 * @module components/ui
 * 
 * Exports:
 * - Core components (Button, Card, etc.)
 * - Contact components (ContactMethod)
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
 *   Badge
 * } from '@/components/ui';
 * 
 * // Import specific types
 * import type { 
 *   ButtonProps,
 *   BaseCardProps
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
export { BaseCard, CoreCompetency, JourneyCard, StatsGrid, PhilosophyCard } from './Card';
export type {
  CoreCompetencyProps,
  JourneyItemProps,
  JourneyCardProps,
  PhilosophyCardProps,
  StatsItemProps,
  StatsGridProps,
} from './Card';

// Contact Components
export { ContactMethod } from './ContactMethod';


// Types
export type { ButtonProps } from './Button';
export type { BaseCardProps } from './Card';
export type { BackToTopProps } from './BackToTop';
export type { BadgeProps } from './Badge';
export type { ContactMethodProps } from './ContactMethod';