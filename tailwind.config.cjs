const draculaThemePlugin = require('tailwind-dracula')();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkest: '#21222c',
      }
    },
  },
  plugins: [draculaThemePlugin],
};
