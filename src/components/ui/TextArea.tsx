
// src/components/ui/TextArea.tsx
/**
 * @file TextArea.tsx - Text area input component
 * @module components/ui
 * @description Enhanced textarea component with integrated
 * label, error handling, and styling.
 * 
 * Features:
 * - Error states
 * - Label support
 * - Resize handling
 * - Character counting
 */
 
import React, { forwardRef } from 'react';
import { AlertCircle } from 'lucide-react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, hint, className = '', ...props }, ref) => {
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
          <textarea
            ref={ref}
            className={`
              w-full rounded-lg border focus:ring-2 focus:ring-offset-2
              px-4 py-2 min-h-[100px] resize-y
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
            <div className="absolute top-2 right-2">
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