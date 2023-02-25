/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}'

   ],
  theme: {
    extend: {
    },
    fontFamily: {
      'belle': ['Bellefair','serif'],
      'barlow': ['Barlow', 'sans-serif'],
      'barlowC': ['Barlow Condensed', 'sans-serif'],
     }

  },
  plugins: [],
}
