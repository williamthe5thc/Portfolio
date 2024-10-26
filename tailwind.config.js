/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
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
        },
        // Secondary Colors
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Accent Colors
        accent: {
          green: {
            light: '#86efac',
            DEFAULT: '#22c55e',
            dark: '#15803d',
          },
          orange: {
            light: '#fdba74',
            DEFAULT: '#f97316',
            dark: '#c2410c',
          },
          red: {
            light: '#fca5a5',
            DEFAULT: '#ef4444',
            dark: '#b91c1c',
          }
        },
        // Background Colors
        background: {
          light: '#f8fafc',
          DEFAULT: '#f1f5f9',
          dark: '#e2e8f0',
        },
        // Text Colors
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
          light: '#94a3b8',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}