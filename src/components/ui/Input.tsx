// src/components/ui/Input.tsx

import React, { forwardRef } from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, icon, className = '', ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={props.id || props.name} 
            className="block text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
              {icon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              w-full rounded-lg border focus:ring-2 focus:ring-offset-2
              ${icon ? 'pl-10' : 'px-4'} py-2
              ${error 
                ? 'border-accent-red focus:border-accent-red focus:ring-accent-red/50' 
                : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500/50'
              }
              ${props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
              ${className}
            `}
            {...props}
          />
          
          {error && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <AlertCircle className="h-5 w-5 text-accent-red" />
            </div>
          )}
        </div>
        
        {(error || hint) && (
          <p className={`text-sm ${error ? 'text-accent-red' : 'text-text-secondary'}`}>
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);