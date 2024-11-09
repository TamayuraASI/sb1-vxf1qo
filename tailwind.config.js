/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-pink': 'rgb(233, 162, 186)',
        'custom-blue': 'rgb(147, 196, 228)',
      },
    },
  },
  plugins: [],
};