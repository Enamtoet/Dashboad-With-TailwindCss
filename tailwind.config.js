/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bgray:"#f1f9f5",
        backgroundColor: "#f6f6f6"
      },
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

