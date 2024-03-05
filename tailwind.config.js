/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'], // Add this line
      },
    },
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '7.5xl': '50rem', // You can set the value to whatever suits your design between 7xl and 8xl.
      },
    },
  },
}
const fixedWidth = "w-[500px]";