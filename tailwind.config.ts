// tailwind.config.ts
/**
 * @file tailwind.config.ts
 * @description Tailwind CSS configuration with custom theme and plugins
 * 
 * Features:
 * - Custom color palette
 * - Typography configuration
 * - Responsive breakpoints
 * - Custom plugins
 * - Form styling
 * 
 * Color Schemes:
 * - Primary: Blue-based scheme
 * - Background: Light neutral scheme
 * - Text: Slate-based hierarchy
 * 
 * @example
 * ```tsx
 * // Using custom colors
 * <div className="bg-primary-600 text-text-primary">
 *   Content
 * </div>
 * 
 * // Using typography
 * <div className="prose prose-lg">
 *   <h1>Title</h1>
 *   <p>Content</p>
 * </div>
 * ```
 * 
 * @notes
 * - Uses semantic color naming
 * - Includes dark mode support
 * - Optimized for accessibility
 */

import type { Config } from 'tailwindcss';

/*
  The one brand scale: Tailwind's blue shifted one step darker from 400 up
  (primary-500 = blue-600, primary-600 = blue-700, ...). Every shade from 500
  up then passes WCAG AA as text on white/slate-50/primary-50 and behind white
  text, and 600+ also passes on primary-100 (tag chips). 50-400 are tints and
  decoration, never text. Don't swap in the stock scale: its 500 is 3.7:1 on
  white, and blue-600 on blue-100 is 4.2:1. Colours are defined here only -
  the old index.css remaps of single classes split the palette in two.
*/
const primary = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#3b82f6',
  500: '#2563eb', // 5.17:1 on white
  600: '#1d4ed8', // 6.70:1 on white, 5.49:1 on primary-100
  700: '#1e40af', // 8.72:1 on white
  800: '#1e3a8a',
  900: '#172554',
};

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary,
        background: {
          light: '#ffffff',
          DEFAULT: '#f8fafc',
          dark: '#e2e8f0',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569', // 7.58:1 on white
          light: '#64748b', // 4.76:1 on white, 4.55:1 on background (slate-50)
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1e293b',
            a: {
              color: primary[600],
              '&:hover': {
                color: primary[700],
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
};

export default config;