// File: src/types/global.ts

import { ReactNode } from 'react';

// Common utility types
export type WithChildren<T = {}> = T & { children: ReactNode };

export type WithClassName<T = {}> = T & { className?: string };

export type WithLoading<T = {}> = T & { 
  isLoading?: boolean;
  loadingText?: string;
};

export type WithError<T = {}> = T & {
  error?: string;
  onError?: (error: Error) => void;
};

// Route types
export type AppRoute = 
  | '/'
  | '/about'
  | '/portfolio'
  | '/portfolio/:id'
  | '/contact';

// Theme types
export interface ThemeConfig {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    accent: Record<string, string>;
    background: Record<string, string>;
    text: Record<string, string>;
  };
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
  typography: {
    fonts: Record<string, string>;
    sizes: Record<string, string>;
    weights: Record<string, number>;
  };
}

// Animation types
export interface AnimationConfig {
  duration: number;
  ease: [number, number, number, number];
  delay?: number;
}

// API types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  error?: string;
}

export interface ApiError extends Error {
  status: number;
  code: string;
  data?: unknown;
}

// Event handler types
export type EventHandler<E extends Event = Event> = (event: E) => void;

export type AsyncEventHandler<E extends Event = Event> = 
  (event: E) => Promise<void>;