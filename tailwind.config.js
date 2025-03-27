/** @type {import('tailwindcss').Config} */
export default {
  moede : "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], // Tambahkan font baru
      },
    },
  },
  plugins: [],
}

