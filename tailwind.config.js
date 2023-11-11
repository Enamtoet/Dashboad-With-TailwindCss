/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      // // Add Screen Sizes
      // screens: {
      //   'sm': '768px',   // Small screens
      //   'md': '992px',   // Medium screens
      //   'lg': '1200px',  // Large screens
      //   'xl': '1440px',  // Extra-large screens
      // },
      // Add Colors 
      colors:{
        bgray:"#f1f9f5",
        backgroundColor: "#f6f6f6"
      },
      // Add Fonts 
      fontFamily:{
        cairo:['Open Sans', 'Cairo', "sans-serif"]
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-box-shadow': {
          'box-shadow': '0 0 10px #ddd',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

