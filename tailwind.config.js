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
      colors: {},
      fontFamily: {
        // body: ["Lato"],
        body: ["Nunito"],
      },
    },
  },
  variants: { display: ["responsive", "hover", "focus"] },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}