/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suse: ['"SUSE"', 'sans-serif'],
        merriweather: ['"Merriweather"', 'serif'], // Added Merriweather
      },
    },
  },
  plugins: [],
}