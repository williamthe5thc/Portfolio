// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
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
        },
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
        background: {
          light: '#f8fafc',
          DEFAULT: '#f1f5f9',
          dark: '#e2e8f0',
        },
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
          light: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#64748b', // text-secondary
            fontSize: '16px',
            lineHeight: '1.6',
            p: {
              marginBottom: '1.5em',
              lineHeight: '1.8',
            },
            'h1, h2, h3, h4': {
              color: '#1e293b', // text-primary
              lineHeight: '1.3',
            },
            a: {
              color: '#0284c7', // primary-600
              '&:hover': {
                color: '#0369a1', // primary-700
              },
            },
          },
        },
      },
      spacing: {
        'touch': '44px', // Minimum touch target size
        'safe': 'env(safe-area-inset-bottom)', // iOS safe area
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      screens: {
        'xs': '375px',  // iPhone SE size
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      touchAction: {
        'none': 'none',
        'pan-x': 'pan-x',
        'pan-y': 'pan-y',
        'manipulation': 'manipulation',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
    require('@tailwindcss/typography'),
  ],
}