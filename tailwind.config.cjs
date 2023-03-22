/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#00111c',
        frontground: '#001523',
        secondary: '#002137',
        Nav: '#001a2c',
        font: '#90e0ef',
      }
    }
  },
  plugins: []
}
