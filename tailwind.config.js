/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Source Code Pro',
      },
      colors: {
        'df-primary': '#2563EB',
        'df-secondary': '#111827',
        'df-white': '#F7F3F3',
        'df-black': '#060504',
        'lg-primary': '#497DEE',
        'dk-primary': '#134FD2',
        'lg-secondary': '#172135',
        'dk-secondary': '#090D15',
        'lg-white': '#FFFFFF',
        'dk-white': '#E3E8ED',
        'lg-black': '#120F0C',
        'dk-black': '#000000',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
