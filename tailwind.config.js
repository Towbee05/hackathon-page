/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        // #191714 #2234AE
        // #009FC2 #0D0A0B
        // "custom-background-color" : "linear-gradient(to right, #191714 90%, #2234AE 10%)"
        "custom-linear" : "linear-gradient(to bottom right, #121C84, #8278DA);",
        "custom-background" : "#062F71"
      },
      screens:{
        "tablet" : {
          "min" : "830px",
          "max" : "1000px"
        },
        "laptop" : {
          "min" : "1000px",
        }
      },
      backgroundImage: {
        "custom-1-image" : "url('/img/IMG-20240723-WA0021.jpg')",
        "custom-2-image" : "url('/img/IMG-20240720-WA0059.jpg')",
        "custom-3-image" : "url('/img/IMG-20240720-WA0060.jpg')",
        "custom-1-background" : "url('/img/IMG-20240720-WA0061.jpg')",
      },
      backgroundPosition: {
        "custom-position" : "top center"
      },
      listStyleImage:{
        checked : "url('/img/circle-check-regular.svg')"
      }
    },
  },
  plugins: [],
}
