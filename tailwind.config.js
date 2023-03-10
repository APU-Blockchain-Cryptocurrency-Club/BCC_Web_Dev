/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    
    extend: {
      fontFamily: {

        'Encode': ['"Encode Sans"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
        'Segoe': ['"Segoe UI"', 'sans-serif'],

      }


  },
  plugins: [
    require('flowbite/plugin')
  ],
  }
}