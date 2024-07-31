/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      space: ["Space Grotesk", "sans-serif", "Arial"],
    },
    extend: {
      backgroundColor: {
        gray: "#F3F3F3",
        lightgreen: "#B9FF66",
      },
    },
  },
  plugins: [],
};
