/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'netflix': ['Netflix Sans','Helvetica Neue','Segoe UI','Roboto','Ubuntu','sans-serif'],'poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        rubberband: {
          "0%": {
            transform: "scaleY(0.9)",
          },
          "50%": {
            transform: "scaleY(1.30)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        }
      },
      animation: {
        "rubber-band": "rubberband 0.6s linear infinite ",
      },
    },
  },
  plugins: [],
}

