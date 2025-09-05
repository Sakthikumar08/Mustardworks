/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mustard: {
          light: '#FFF9C4',
          DEFAULT: '#FFD54F',
          dark: '#FBC02D',
          brown: '#8D6E63',
        }
      }
    },
  },
  plugins: [],
}