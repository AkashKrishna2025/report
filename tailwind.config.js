// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'staymaster-brand': '#20C997', // This is an example teal shade matching your image. You can adjust it.
      }
    },
  },
  plugins: [],
}