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
        twitter: "#1da1f2",
        twitterAlt:"rgb(29 161 242 / 20%)",
        facebook:"#1877f2",
        facebookAlt:"rgb(24 119 242 / 20%)",
        youtube:"#ff0000",
        youtubeAlt:"rgb(255 0 0 / 20%)",
        linkdin:"#0077b5",
        linkdinAlt:"rgb(0 119 181 / 20%)"
      },
      // Add Fonts 
      fontFamily:{
        cairo:['Open Sans', "sans-serif"]
      },
      // Add Sizes 
      minWidth: {
        '250px': '230px',
        '400px': '400px',
      },
      minHeight: {
        '200px': '200px',
      },
      flexGrow: {
        2: '2'
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

