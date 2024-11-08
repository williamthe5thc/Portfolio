// src/providers/AppProviders.tsx
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