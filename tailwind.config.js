/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {

        'Encode': ['"Encode Sans"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
        'Segoe': ['"Segoe UI"', 'sans-serif'],

      },
      
      backgroundImage: {
        'test':"url('/src/assets/bg.png')"
      }


  },
  plugins: [],
  }
}