/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "navy": "#212529",
        "lightGrey": "#dadada",
        "darkGrey": "#808080",
        "lightBg": "rgba(255,255,255,0.1)"
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      screens :{
        "xsm": "540px",
        "1xl": "1440px"
      }
    },
  },
  plugins: [],
}

