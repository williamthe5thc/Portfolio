// src/providers/AppProviders.tsx
/**
 * @file AppProviders.tsx - Application providers
 * @module providers
 * @description Global provider composition for application-wide
 * context and functionality.
 * 
 * Providers:
 * - Analytics
 * - Router
 * - Animation
 * - Error handling
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