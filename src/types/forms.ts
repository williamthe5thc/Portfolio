// src/types/forms.ts
import { ChangeEvent, FocusEvent } from 'react';

// Form Field Types
export interface FormField {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

// Form State Types
export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

// Validation Types
export type ValidationRule<T> = (value: T) => string | undefined;

export type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T[K]>;
};

// Form Status Types
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