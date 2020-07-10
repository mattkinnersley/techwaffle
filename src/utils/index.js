import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeShiki from 'rehype-shiki';
import html from 'rehype-stringify';
const contentDir = join(process.cwd(), 'content');

export const getPostSlugs = () => {
  return fs.readdirSync(contentDir).map((slug) => slug.replace(/\.md$/, ''));
};

export const getPostBySlug = (slug, fields = []) => {
  const fullPath = join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllPosts = (fields = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
};

export const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki)
    .use(html)
    .process(markdown);
  return result.toString();
};
