// src/types/forms.ts
/**
 * @file forms.ts
 * @description Centralized type definitions for form handling throughout the application.
 * Includes types for validation, form state management, and component props.
 */

import { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

// Form Validation Types
export type ValidationRule<T> = (value: T) => string | undefined;

export type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T[K]>;
};

// Form Status and Error Types
export type FormStatus = 
  | 'idle' 
  | 'submitting' 
  | 'success' 
  | 'error' 
  | 'rate-limited';

export interface FormError {
  field?: string;
  message: string;
  code?: string;
}

// Form State Management Types
export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isDirty: boolean;
  isValid: boolean;
}

// Component Prop Types
export interface FormFieldProps {
  label?: string;
  error?: string;
  children: ReactNode;
  className?: string;
  required?: boolean;
}

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
}

export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  rows?: number;
}

export interface ContactMethodProps {
  icon: 'Mail' | 'Phone' | 'Linkedin' | 'MapPin';
  title: string;
  content: string;
  link?: string;
  color?: string;
  className?: string;
}

// Form Handler Types
export type FormChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

export type FormSubmitHandler<T> = (
  values: T,
  event?: React.FormEvent
) => Promise<void> | void;

export interface UseFormReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  handleChange: FormChangeHandler;
  handleSubmit: FormSubmitHandler<T>;
  reset: () => void;
  setFieldValue: (field: keyof T, value: any) => void;
  setFieldError: (field: keyof T, error: string) => void;
  isSubmitting: boolean;
  isValid: boolean;
}