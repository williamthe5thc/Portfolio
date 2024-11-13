// src/components/shared/index.ts
/**
 * @file index.ts
 * @description Centralized export point for shared components
 * that are used across multiple features.
 */

// Core Components
export { ErrorBoundary } from './ErrorBoundary';

export { SEO } from './SEO';
export { Timeline } from './Timeline';
export { ProjectCarousel } from './ProjectCarousel';
export { default as GoogleAnalytics } from './GoogleAnalytics';

// Animation Exports
export * from '@/lib/animations';

// Export component types
export type { ErrorBoundaryProps } from './ErrorBoundary';
export type { SEOProps } from './SEO';
export type { TimelineProps } from './Timeline';

//Quick Links
export { QuickLinks } from './QuickLinks';

//Scrolling 
export { ScrollLink } from './ScrollLink';
export { ScrollReveal } from './ScrollReveal';
export { ScrollToSection } from './ScrollToSection';
