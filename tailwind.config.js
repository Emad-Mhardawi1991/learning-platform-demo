/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Nunito, Roboto"]
      },

      ////// theme colors
      colors:{
        dark:{
          "100": "#24273D",
          "200": "#1A1C2C",
          "300": "#121425",
          "400": "#0E0F1C"
        },

        primary:{
          "200": "#E87C7C",
          "300": "#F26565"
        }
      },
      ////// break points
      screens: {
        'sm': {'max': '639px'},
        'md': {'max': '767px'},
        'lg': {'max': '1023px'},
        'xl': {'max': '1440px'},
      }
    },
  },
  plugins: [],
};
