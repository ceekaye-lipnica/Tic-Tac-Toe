/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'sm' : '0 0 0 2px',
      },
      fontFamily: {
        'tic' : ['Permanent Marker', 'cursive'],
      }
    },
  },
  plugins: [],
}