// src/components/shared/containers.jsx
import React from 'react';

export const GridContainer = ({ children, cols = "md:grid-cols-2 lg:grid-cols-3" }) => (
  <div className={`grid grid-cols-1 ${cols} gap-8`}>
    {children}
  </div>
);

export const SectionContainer = ({ children, className = '' }) => (
  <div className={`max-w-6xl mx-auto ${className}`}>
    {children}
  </div>
);