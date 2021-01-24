import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import unified from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeShiki from "rehype-shiki";
import html from "rehype-stringify";
import externalLinks from "remark-external-links";
const contentDir = join(process.cwd(), "content/markdown");

export const getPostSlugs = () => {
  return fs.readdirSync(contentDir).map((slug) => slug.replace(/\.md$/, ""));
};

export const getPostBySlug = (slug) => {
  const fullPath = join(contentDir, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, content, slug };
  } catch (e) {
    return {};
  }
};

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

export const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(remarkParse)
    .use(externalLinks)
    .use(remarkRehype)
    .use(rehypeShiki)
    .use(html)
    .process(markdown);
  return result.toString();
};
