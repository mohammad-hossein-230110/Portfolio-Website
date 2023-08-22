/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        primaryColor:"#8873ef",
        headingColor:"#081e21",
        smalltextColor:"#193256",

      },
    },
  },
  plugins: [],
}