// File: src/types/components.ts

import { ElementType, ComponentProps } from 'react';
import type { WithClassName, WithChildren } from './global';

// Polymorphic component type
export type PolymorphicRef<C extends ElementType> = ComponentProps<C>['ref'];

export type PolymorphicComponentProps<
  C extends ElementType,
  Props = {}
> = WithClassName<Props> &
  Omit<ComponentProps<C>, keyof Props | 'className'> & {
    as?: C;
  };

// Button types
export type ButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  loadingText?: string;
}

// Form types
export type InputType = 
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search';

export interface InputBaseProps {
  type?: InputType;
  label?: string;
  error?: string;
  hint?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
}

// Layout types
export interface ContainerProps extends WithClassName {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
  center?: boolean;
}

export interface GridProps extends WithClassName {
  columns?: number | { [key: string]: number };
  gap?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
}

// Navigation types
export interface NavigationItem {
  label: string;
  path: string;
  icon?: ElementType;
  children?: NavigationItem[];
}

// Modal types
export interface ModalProps extends WithChildren {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  isCentered?: boolean;
}

// Toast types
export type ToastPosition = 
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left';

export type ToastStatus = 'info' | 'success' | 'warning' | 'error';

export interface ToastProps {
  title?: string;
  description?: string;
  status?: ToastStatus;
  duration?: number;
  isClosable?: boolean;
  position?: ToastPosition;
  onClose?: () => void;
}