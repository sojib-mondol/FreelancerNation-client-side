/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'banner2': "url('/src/assets/hero-banner-2.jpg')",
        'banner3': "url('/src/assets/hero-banner-3.jpg')",
        'banner4': "url('/src/assets/hero-banner-4.jpg')",
        'banner5': "url('/src/assets/hero-banner-5.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
