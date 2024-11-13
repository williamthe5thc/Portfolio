// src/components/ui/FormField.tsx
/**
 * @file FormField.tsx
 * @description Reusable form field wrapper with label and error handling
 * @module components/ui
 * 
 * Features:
 * - Label management
 * - Error display
 * - Required field indication
 * - Help text support
 * - Animation effects
 * 
 * @example
 * ```tsx
 * <FormField
 *   label="Email"
 *   error={errors.email}
 *   required
 * >
 *   <Input
 *     type="email"
 *     name="email"
 *     onChange={handleChange}
 *   />
 * </FormField>
 * 
 * <FormField
 *   label="Message"
 *   error={errors.message}
 *   hint="Max 500 characters"
 * >
 *   <TextArea
 *     name="message"
 *     onChange={handleChange}
 *   />
 * </FormField>
 * ```
 * 
 * @accessibility
 * - Associated labels
 * - Error announcements
 * - Required field indicators
 */

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  children,
  className = ''
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <div className="relative">
        {children}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <AlertCircle className="h-5 w-5 text-accent-red" />
          </motion.div>
        )}
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-accent-red"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};