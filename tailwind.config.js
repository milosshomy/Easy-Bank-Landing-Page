/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        publicSans: "'Public Sans', sans-serif",
      },
      backgroundImage: {
        heroDesktop: "url('../assets/bg-intro-desktop.svg')",
        heroMobile: "url('../assets/bg-intro-mobile.svg')",
      },
      colors: {
        heading: "hsl(233, 26%, 24%)",
        gradientFrom: "hsl(136, 65%, 51%)",
        gradientTo: "hsl(192, 70%, 51%)",
        paragraph: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        bodyBg: "hsl(0, 0%, 98%)",
        whiteClr: "hsl(0, 0%, 100%)",
      },
      screens: {
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
