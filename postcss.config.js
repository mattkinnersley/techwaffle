module.exports = {
  plugins: [
    "tailwindcss",
    ...(process.env.NODE_ENV === "production"
      ? [
          [
            "@fullhuman/postcss-purgecss",
            {
              content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
              defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ]
      : []),
    "postcss-preset-env",
  ],
};
