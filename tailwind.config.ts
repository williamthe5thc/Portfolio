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

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        background: {
          light: '#f8fafc',
          DEFAULT: '#f1f5f9',
          dark: '#e2e8f0',
        },
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
          light: '#94a3b8',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1e293b',
            a: {
              color: '#0284c7',
              '&:hover': {
                color: '#0369a1',
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