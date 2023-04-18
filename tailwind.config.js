/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        //body bg
        'antiflashWhite': '#E5E9ECff',
        //bluish bg
        'spaceCadet': '#2D2D3Fff',
        'delftBlue': '#3C3F60ff',

        //footer bg
        'raisenBlack': '#23242Fff',
        //header bg
        'salmon': '#FF856Eff',
        'bittersweet': '#FF5C61ff',
        //header font color
        'charcoal': '#3C3F60ff',
        //text font color
        'slateGray': '#727889ff',
        'frenchGray': '#C3C7CEff',
      },
      backgroundImage: {

        'desk': "url('../images/bg-pattern-intro-desktop.svg')",
        'mobile': "url('../images/bg-pattern-intro-mobile.svg')",


      },
      fontFamily: {
        overpass: ['Bai Jamjuree',],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

