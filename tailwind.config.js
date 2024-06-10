/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        "-1/2": "-50%"
      },
      transformOrigin: {
        "translate-two": "translate(100%, -50%)"
      },
      backgroundImage: {
        "gradient-rgba":
          "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))",
        "gradient-two": "linear-gradient(35deg, #494949, #313131)"
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(20rem,1fr)"
      },
      colors: {
        customGray: "#313131"
      }
    }
  },
  plugins: []
}
