// src/types/
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Additional type definitions for your custom components and utilities
declare module '@/components/ui' {
  export interface Theme {
    colors: {
      primary: Record<string, string>;
      secondary: Record<string, string>;
      // ... other theme types
    };
    // ... other theme properties
  }
}