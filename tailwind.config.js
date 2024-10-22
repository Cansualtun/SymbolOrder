/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro-rounded': ['SF Pro Rounded', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

