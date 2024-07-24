/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        "2xl": "1440px",
        1366: "1366px",
      },
      colors: {
        primary: "#FF6400",
        secondary: "#232323",
        skyBlue: "#E7F1F2",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
};
