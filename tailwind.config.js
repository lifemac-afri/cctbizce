/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_green: "rgb(34 197 94)",
        dark_green: "rgb(40 148 80)",
        primary_gray: "rgb(51 65 85)",
      },
    },
  },
  plugins: [],
};
