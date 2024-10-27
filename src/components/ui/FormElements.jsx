// src/components/ui/FormElements.jsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

export const FormInput = ({ 
  label, 
  error, 
  touched, 
  className = '', 
  ...props 
}) => (
  <div className="space-y-1">
    {label && (
      <label className="block text-sm font-medium text-text-primary">
        {label}
      </label>
    )}
    <div className="relative">
      <input
        className={`
          w-full rounded-lg border 
          ${touched && error 
            ? 'border-accent-red focus:border-accent-red focus:ring-accent-red' 
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          }
          ${className}
        `}
        {...props}
      />
      {touched && error && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AlertCircle className="h-5 w-5 text-accent-red" />
        </div>
      )}
    </div>
    {touched && error && (
      <p className="text-sm text-accent-red mt-1">{error}</p>
    )}
  </div>
);

export const FormTextArea = ({ 
  label, 
  error, 
  touched, 
  className = '', 
  ...props 
}) => (
  <div className="space-y-1">
    {label && (
      <label className="block text-sm font-medium text-text-primary">
        {label}
      </label>
    )}
    <div className="relative">
      <textarea
        className={`
          w-full rounded-lg border 
          ${touched && error 
            ? 'border-accent-red focus:border-accent-red focus:ring-accent-red' 
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          }
          ${className}
        `}
        {...props}
      />
      {touched && error && (
        <div className="absolute top-2 right-2">
          <AlertCircle className="h-5 w-5 text-accent-red" />
        </div>
      )}
    </div>
    {touched && error && (
      <p className="text-sm text-accent-red mt-1">{error}</p>
    )}
  </div>
);