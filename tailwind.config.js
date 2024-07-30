/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  // theme: {
  //   extend: {},
  // },

  theme: {
    extend: {
      transitionProperty: {
        transform: 'transform',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

