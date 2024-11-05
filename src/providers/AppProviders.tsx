// src/providers/AppProviders.tsx
import React from 'react';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <>{children}</>;
};

export default AppProviders;