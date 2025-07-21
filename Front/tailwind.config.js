const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'white',
        primary: "#174EB2",
        secondary: "#D9CE46",
        semiBlanco:"#FEFEFE",
        blur:"#174db26e"
                 
      }
    }
  },
  darkMode: "class", // Permite el uso de clases para el modo oscuro
  plugins: [heroui()],
};
