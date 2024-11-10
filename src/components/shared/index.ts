// src/components/shared/index.ts
/**
 * @file index.ts
 * @description Centralized export point for shared components
 * that are used across multiple features.
 */

// Core Components
export { ErrorBoundary } from './ErrorBoundary';
export { LoadingScreen } from './LoadingScreen';
export { SEO } from './SEO';
export { Timeline } from './Timeline';
export { ProjectCarousel } from './ProjectCarousel';
export { default as PageTransition } from './PageTransition';
export { default as GoogleAnalytics } from './GoogleAnalytics';

// Animation Exports
export * from '@/lib/animations';

// Export component types
export type { ErrorBoundaryProps } from './ErrorBoundary';
export type { LoadingScreenProps } from './LoadingScreen';
export type { SEOProps } from './SEO';
export type { TimelineProps } from './Timeline';