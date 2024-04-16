/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mealplans': "linear-gradient(to top, #EEE 0, rgba(238, 238, 238, 0) 200px)",
      },
    },
  },
  plugins: [],
}