/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:["Poppins", "DM Sans"]
      },
      colors:{
        primary:"#F62682"
      }
    },
  },
  plugins: [],
};
