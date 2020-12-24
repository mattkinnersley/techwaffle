module.exports = {
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        waffle: "#fcc14c",
        waffleLight: "#ffdf9f",
        darkGrey: "#212121",
        lightGrey: "#313131",
      },
      borderRadius: {
        snippet: "15px",
      },
      transitionProperty: {
        background: "background-color",
        borderShadow: "box-shadow, border-color",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
      boxShadow: ["active"],
    },
  },
  plugins: [],
};
