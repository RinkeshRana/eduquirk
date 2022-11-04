/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pompador: ["pompador", "cursive"],
        gordita: ["gordita", "sans-serif"],
      },
    },
  },
  plugins: [],
};
