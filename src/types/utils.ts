// src/types/utils.ts
import { ReactNode, ComponentType } from 'react';

// Common props interface for components that accept children
export interface WithChildren {
  children: ReactNode;
}

// Utility type for components that can be polymorphic
export type AsProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'className'>;

// Utility type for components with loading states
export interface WithLoading {
  isLoading?: boolean;
  loadingText?: string;
}

// Utility type for components with error states
export interface WithError {
  error?: string;
  onError?: (error: Error) => void;
}

// Utility type for components with async handlers
export type AsyncHandler<T = void> = () => Promise<T>;

// Utility type for style variants
export type VariantProps<T extends string> = {
  variant?: T;
};

// Utility type for size variants
export type SizeProps<T extends string> = {
  size?: T;
};

// Utility type for components with refs
export type WithRef<T> = {
  ref?: React.Ref<T>;
};

// Utility type for components with icons
export interface WithIcon {
  icon?: ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
}

// Utility type for form field props
export interface FieldProps extends WithError {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

// Utility type for animation variants
export interface AnimationVariants {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
}

// Type guard for checking if a value is a Promise
export function isPromise<T = any>(value: any): value is Promise<T> {
  return value && typeof value.then === 'function';
}

// Type guard for checking if a value is an Error
export function isError(value: any): value is Error {
  return value instanceof Error;
}