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
        'banner-1': "url('/src/assets/hero-banner-1.jpg')",
        'banner-2': "url('/src/assets/hero-banner-2.jpg')",
        'banner-3': "url('/src/assets/hero-banner-3.jpg')",
        'banner-4': "url('/src/assets/hero-banner-4.jpg')",
        'banner-5': "url('/src/assets/hero-banner-5.jpg')",
        'banner-6': "url('/src/assets/hero-banner-6.jpg')",
      }
    },
  },
  plugins: [],
};
