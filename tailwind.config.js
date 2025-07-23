/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  moede : "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: { 
       sans: ['Playfair', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}


