/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mainColor: "#bf3a30",
      subColor: "#864ba2",
      bgColor: "#0d324d",
      transparent: "transparent",
    },
  },
  plugins: [],
};
