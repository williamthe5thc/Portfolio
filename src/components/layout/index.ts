// src/components/layout/index.ts
/**
 * @file Layout component exports
 * @description Centralized exports for layout components and their types
 * @module components/layout
 * 
 * Available components:
 * - Container: Basic container with max-width and padding
 * - Section: Full-width sections with background options
 * - GridContainer: Responsive grid layout
 * - Navigation: Main site navigation
 * - Footer: Site footer
 * - PageHeader: Page title and description header
 */

// Container Components
export { 
  Container,
  Section,
  GridContainer,
  SectionContainer,
  containerPadding
} from './Container';
export type { 
  ContainerProps,
  SectionProps,
  GridContainerProps,
  ContainerBaseProps 
} from './Container';

// Navigation Components
export { Navigation } from './Navigation';
export type { NavigationProps } from './Navigation';

// Footer Component
export { Footer } from './Footer';
export type { FooterProps } from './Footer';

// Page Header Component
export { PageHeader } from './PageHeader';
export type { PageHeaderProps } from './PageHeader';

//Page transition
export { default as PageTransition } from './PageTransition';



