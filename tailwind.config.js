module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      colors: {
        'primary': "#121B46",
        'secondary': "#DA3832",
      },
      fontFamily: {
        // body: ["Lato"],
        // body: ["Titillium+Web"],
        body: ["Nunito"],
      },
      screens: {
        'se': '360px'
      }
    },
  },
  variants: { display: ["responsive", "hover", "focus"] },
  plugins: [
  ],
}