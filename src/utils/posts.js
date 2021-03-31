import fs from "fs";
import { join } from "path";
import renderToString from "next-mdx-remote/render-to-string";
import mdxPrism from "mdx-prism";
import matter from "gray-matter";
import PostSeries from "@techwaffle/components/post-series";
const contentDir = join(process.cwd(), "content");

export const getPostSlugs = () => {
  return fs.readdirSync(contentDir).map((slug) => slug.replace(/\.mdx$/, ""));
};

export const getFrontMatterBySlug = (slug) => {
  const fullPath = join(contentDir, `${slug}.mdx`);
  try {
    const source = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(source);
    return { slug, ...data };
  } catch (e) {
    return {};
  }
};

export const getPostBySlug = async (slug) => {
  const fullPath = join(contentDir, `${slug}.mdx`);
  try {
    const source = fs.readFileSync(fullPath, "utf8");

    const { content, data } = matter(source);

    const mdxSource = await renderToString(content, {
      components: { PostSeries },
      scope: data,
      mdxOptions: {
        rehypePlugins: [mdxPrism],
      },
    });

    return {
      mdxSource,
      ...data,
    };
  } catch (e) {
    return {};
  }
};

export const getAllPostFrontMatters = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getFrontMatterBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
