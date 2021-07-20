module.exports = {
  purge: {
    content: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
    options: {
      safelist: ["/data-theme$/"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#F50000",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
