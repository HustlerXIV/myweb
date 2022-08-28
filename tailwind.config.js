/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mainColor: "#02457A",
      subColor: "#018ABE",
      bgColor: "#97CAD8",
      cleanColor: "#d6e8ee",
      darkestColor: "#001b48",
      normalColor: "#f9f9f9",
      alertColor: "#F80000",
      transparent: "transparent",
      white: "#fff",
    },
    fontFamily: {
      kLight: ["kanit-light", "sans-serif"],
      kRegular: ["kanit-regular", "sans-serif"],
      kBold: ["kanit-bold", "sans-serif"],
    },
  },
  plugins: [],
};
