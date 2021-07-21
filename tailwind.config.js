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
      colors: {
        // primary: "#FF6363",
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
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    background: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
    visibility: ["responsive", "hover", "focus", "active", "group-hover"],
    display: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}