/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      colors: {
        'soft-pink': '#f8cdd2',
        'soft-purple': '#d3b2db',
        'soft-blue': '#d0e1f9',
        'soft-white': '#fefefe',
      },
    },
  },
  plugins: [],
};
