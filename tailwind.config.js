/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linkedin': '#007bb5',
      },
      backgroundColor: {
        'antiquewhite': 'antiquewhite',
        'bisque': 'bisque',
        'floralwhite': 'floralwhite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
