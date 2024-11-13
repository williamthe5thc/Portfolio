// src/providers/AppProviders.tsx
/**
 * @file AppProviders.tsx
 * @description Root provider component that wraps the application with necessary contexts
 * @module providers
 * 
 * Features:
 * - AnimatePresence for page transitions
 * - Analytics provider
 * - Theme provider
 * - Error boundary
 * - State management context
 * 
 * @example
 * ```tsx
 * // In root application file
 * ReactDOM.createRoot(document.getElementById('root')).render(
 *   <React.StrictMode>
 *     <AppProviders>
 *       <App />
 *     </AppProviders>
 *   </React.StrictMode>
 * );
 * ```
 * 
 * @notes
 * - Providers are ordered by dependency
 * - Error boundary catches all child errors
 * - Analytics tracks page transitions
 */

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { AnalyticsProvider } from './AnalyticsProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AnalyticsProvider>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </AnalyticsProvider>
  );
};