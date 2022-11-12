/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      //
      dark0: '#05172C',
      darka: '#8A949F',
      darkb: '#B7BDC4',
      darkc: '#E4E6E9',
      darkd: '#F4F5F5',
      //
      primary: '#86BF3E',
      secondary: '#FC4B4E',
      tertiary: '#FEC740'
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
