/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ['arvo'],
        helvetica: ['helvetica'],
      },
      colors: {
        orangenew: '#f74c3c',
        graynew: '#222222',
        grayclair: '#cecece',
      },
    },
  },
  plugins: [],
}

