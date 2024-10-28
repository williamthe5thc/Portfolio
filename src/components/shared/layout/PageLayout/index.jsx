// src/components/shared/PageLayout.jsx
import React from 'react';

export const PageLayout = ({ children, className = '' }) => (
  <div className={`min-h-screen bg-gradient-to-b from-background-light to-background ${className}`}>
    {children}
  </div>
);