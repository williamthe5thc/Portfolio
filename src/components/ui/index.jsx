// src/components/ui/index.jsx
import React from 'react';

export const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Re-export other UI components
export { BaseCard } from './BaseCard';
export { FormInput, FormTextArea } from './FormElements';
export { ImagePlaceholder } from './ImagePlaceholder';