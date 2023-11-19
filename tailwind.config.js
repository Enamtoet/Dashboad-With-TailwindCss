/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
    
      // Add Colors 
      colors:{
        bgray:"#f1f9f5",
        backgroundColor: "#f6f6f6",
        bGray:"#eee",
        blueColor: "#0075ff",
        blueAltColor: "#0d69d5",
        orangeColor: "#f59e0b",
        greenColor: "#22c55e",
        redColor: "#f44336",
        greyColor: "#888",
      },
      // Add Fonts 
      fontFamily:{
        cairo:['Open Sans', "sans-serif"]
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

