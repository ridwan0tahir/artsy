/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        baskervville: ["Baskervville", "serif"],
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        stix: ["STIX Two Text", "serif"],
        satoshi: ["Satoshi", "sans-serif"],
        clash: ["Clash Display", "sans-serif"],
      },

      fontSize: {
        "fs-10": "0.714rem",
        "fs-20": "0.857rem",
        "fs-30": "1.000rem",
        "fs-40": "1.214rem",
        "fs-50": "1.429rem",
        "fs-60": "1.714rem",
        "fs-70": "2.071rem",
        "fs-80": "2.500rem",
        "fs-90": "3.000rem",
      },

      lineHeight: {
        "lh-10": "0.857rem",
        "lh-20": "1.00rem",
        "lh-30": "1.214rem",
        "lh-40": "1.429rem",
        "lh-50": "1.714rem",
        "lh-60": "2.057rem",
        "lh-70": "2.500rem",
        "lh-80": "3.000rem",
        "lh-90": "3.600rem",
      },

      colors: {
        "black-01": "hsla(0, 0%, 0%, 1)",
        "black-02": "hsla(0, 0%, 16%, 1)",
        "black-03": "hsla(0, 0%, 20%, 1)",
        "black-04": "hsla(0, 0%, 38%, 1)",
        "black-05": "hsla(0, 0%, 0%, 0.6)",
        "black-06": "hsla(0, 0%, 9%, 1)",
        "white-01": "hsla(0, 0%, 100%, 1)",
        "white-02": "hsla(0, 0%, 85%, 0.6)",
        "blue-01": "hsla(234, 58%, 48%, 1)",
        "blue-02": "hsla(191, 24%, 57%, 1)",
        "blue-03": "hsla(200, 100%, 32%, 1)",
      },

      width: {
        "w-90": "90%",
      },

      keyframes: {
        accord: {
          "0%": { transform: "scaleY(0)" },
          "50%": { transform: "scaleY(0.5)" },
          "100%": { transform: "scaleY(1)" },
        },
      },

      animation: {
        accord: "accord 1s ease-in-out",
      },

      gridTemplateColumns: {
        fluid: "repeat(auto-fill, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [],
};
