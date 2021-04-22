const mdxPrism = require("mdx-prism");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [mdxPrism],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
