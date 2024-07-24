/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens:{
        "tablet" : {
          "min" : "600px",
          "max" : "1000px"
        },
        "laptop" : {
          "min" : "1000px",
        }
      },
      backgroundImage: {
        "custom-1-background" : "url('/img/IMG-20240723-WA0021.jpg')"
      },
      backgroundPosition: {
        "custom-position" : "top center"
      }
    },
  },
  plugins: [],
}

