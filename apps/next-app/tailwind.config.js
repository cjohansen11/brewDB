/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./apps/**/*.{js,ts,jsx,tsx}",
    "../../packages/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#232020",
      "dark-grey": "#3A3535",
      orange: "#FF7315",
      white: "#F4F4F4",
      red: "#DC2626",
    },
  },
  plugins: [],
};
