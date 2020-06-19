module.exports = {
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        waffle: "#fcc14c",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
