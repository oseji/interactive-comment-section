/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      width: {
        100: "400px",
        150: "500px",
        200: "600px",
      },
      height: {
        100: "400px",
        150: "500px",
        175: "550px",
        200: "600px",
        screenDevice: "100dvh",
        screenSmall: "100svh",
      },
    },
  },
  plugins: [],
};
