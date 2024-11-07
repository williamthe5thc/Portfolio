// src/components/shared/index.ts

// Core components
export { ErrorBoundary } from './ErrorBoundary.tsx';
export { LoadingScreen } from './LoadingScreen.tsx';
export { SEO } from './SEO.tsx';
export { Timeline } from './Timeline.tsx';



// Animation exports
export * from './animations';

// Transition exports
export { default as PageTransition } from './PageTransition';

// Types
export type { ErrorBoundaryProps } from './ErrorBoundary';
export type { LoadingScreenProps } from './LoadingScreen';
export type { SEOProps } from './SEO';
export type { TimelineEvent } from './Timeline';
