/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        mainBack: '#191919',
        mainText: '#ffffff',
        greyAcent: '#667085',
        greyAcent2: '#9FA1A3',
        greyOpacity: '#D0D5DD',
        graybackOpasity: '#43454E66',
        graybackOpasity2: '#43454E99',
        grayFooter: '#2A2B2E',
        mainRed: '#DF2935',
        
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

