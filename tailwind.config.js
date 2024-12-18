/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mate: ['Mate SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
