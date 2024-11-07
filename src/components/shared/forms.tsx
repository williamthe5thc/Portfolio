// src/components/ui/Form.tsx
/**
 * @file Form.tsx
 * @description Collection of form-related components implementing the types
 * defined in @/types/forms.ts. These components provide the visual and 
 * interactive elements of forms throughout the application.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import type {
  FormFieldProps,
  FormInputProps,
  FormTextAreaProps,
  ContactMethodProps
} from '@/types/forms';

// Form Field Component
export const FormField = ({
  label,
  error,
  children,
  className = '',
  required = false
}: FormFieldProps) => {
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
export const FormInput = ({
  error,
  icon,
  className = '',
  ...props
}: FormInputProps) => {
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
export const FormTextArea = ({
  error,
  className = '',
  rows = 4,
  ...props
}: FormTextAreaProps) => {
  return (
    <textarea
      rows={rows}
      className={`
        w-full rounded-lg border px-4 py-2 resize-y min-h-[100px]
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

// Contact Method Component
export const ContactMethod = ({ 
  icon: IconName, 
  title, 
  content, 
  link, 
  color = "text-primary-600",
  className = ''
}: ContactMethodProps) => {
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

// Convenience exports
export const Form = {
  Field: FormField,
  Input: FormInput,
  TextArea: FormTextArea,
  ContactMethod: ContactMethod
};