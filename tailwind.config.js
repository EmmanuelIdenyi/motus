/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { height: {
      '5.5/6': '95%',
    }},
   
  },
  plugins: [],
}

