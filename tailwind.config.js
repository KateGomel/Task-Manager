/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*{js,hds}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
