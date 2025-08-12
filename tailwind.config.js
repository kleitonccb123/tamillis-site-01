/**  @type {import('tailwindcss').Config} */
export  default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wine': '#6F2B36',
        'nude-light': '#E9DED1',
        'brown-light': '#C9B6A1',
        'brown': '#938C85',
        'soft-black': '#2E2E2E',
        'wine-dark': '#5C504A',
        'base-light': '#F9F7F5',
        'neutral': '#938C85'
      }
    },
  },
  plugins: [],
}; 
 