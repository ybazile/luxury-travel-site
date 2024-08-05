/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          light: '#EDE2D0',
          DEFAULT: '#D4C1A6',
          dark: '#A4937E',
          accent: '#8C7A6B'
        }
      }
    },
  },
  plugins: [],
}
