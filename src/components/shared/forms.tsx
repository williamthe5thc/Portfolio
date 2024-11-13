// src/components/shared/forms.tsx
/**
 * @file forms.tsx
 * @description A collection of reusable form components and related utilities.
 * Includes contact methods, form fields, and common form patterns used throughout
 * the application. Built with proper TypeScript types and Framer Motion animations.
 * 
 * Components:
 * - ContactMethod: Display contact information with icons
 * - FormField: Reusable form field wrapper with validation
 * - FormInput: Styled input component
 * - FormTextArea: Styled textarea component
 * 
 * Usage:
 * ```tsx
 * <ContactMethod
 *   icon="Mail"
 *   title="Email"
 *   content="example@email.com"
 *   link="mailto:example@email.com"
 * />
 * 
 * <FormField label="Name" error={errors.name}>
 *   <FormInput name="name" onChange={handleChange} />
 * </FormField>
 * ```
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

// Types
export interface ContactMethodProps {
  icon: 'Mail' | 'Phone' | 'Linkedin' | 'MapPin';
  title: string;
  content: string;
  link?: string;
  color?: string;
  className?: string;
}

export interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  rows?: number;
}

// Contact Method Component
export const ContactMethod: React.FC<ContactMethodProps> = ({ 
  icon: IconName, 
  title, 
  content, 
  link, 
  color = "text-primary-600",
  className = ''
}) => {
  const Icon = {
    Mail,
    Phone,
    Linkedin,
    MapPin
  }[IconName];
  
  const Inner = () => (
    <>
      <Icon className={`w-6 h-6 ${color} mt-1`} />
      <div>
        <h3 className="text-lg font-medium text-text-primary">{title}</h3>
        <p className={link ? `${color} hover:opacity-80` : "text-text-secondary"}>
          {content}
        </p>
      </div>
    </>
  );

  return (
    <motion.div 
      variants={fadeInUp}
      className={`flex items-start gap-4 ${className}`}
    >
      {link ? (
        <motion.a 
          href={link}
          className="flex items-start gap-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Inner />
        </motion.a>
      ) : (
        <Inner />
      )}
    </motion.div>
  );
};

// Form Field Component
export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  children,
  className = '',
  required = false
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-text-primary">
          {label}
          {required && <span className="text-accent-red ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {children}
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

// Form Input Component
export const FormInput: React.FC<FormInputProps> = ({
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        className={`
          w-full rounded-lg border px-4 py-2
          ${icon ? 'pl-10' : ''}
          ${error 
            ? 'border-accent-red focus:border-accent-red focus:ring-accent-red/50' 
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500/50'
          }
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

// Form TextArea Component
export const FormTextArea: React.FC<FormTextAreaProps> = ({
  error,
  className = '',
  rows = 4,
  ...props
}) => {
  return (
    <textarea
      rows={rows}
      className={`
        w-full rounded-lg border px-4 py-2
        ${error 
          ? 'border-accent-red focus:border-accent-red focus:ring-accent-red/50' 
          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500/50'
        }
        ${className}
      `}
      {...props}
    />
  );
};

// Example form state type - useful for form implementations
export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
}