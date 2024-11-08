// src/components/index.ts
/**
 * @file index.ts
 * @description Root barrel file for all components.
 * Provides a single import point for all component types.
 */

// Re-export all component categories
export * from './ui';
export * from './shared';
export * from './layout';
export * from './features';

// Export commonly used types
export type {
  // UI Component Types
  ButtonProps,
  CardProps,
  ContainerProps,
  FormFieldProps,
  
  // Shared Component Types
  ErrorBoundaryProps,
  LoadingScreenProps,
  SEOProps,
  
  // Layout Component Types
  HeaderProps,
  FooterProps,
  NavigationProps,
  
  // Feature Component Types
  ProjectCardProps,
  ContactFormProps
} from './types';