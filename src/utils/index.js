import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const posts = [
  {
    title: "Post 1",
    description: "Post 1 Description here bla bla bla",
    content: "Post 1 content!!!",
    slug: "post-one",
  },
  {
    title: "Post 2",
    description: "Post 2 Description goes here bla bla bla!!!",
    content: "Post 2 content!!!",
    slug: "post-two",
  },
  {
    title: "Post 3",
    description: "Post 3 Description goes here bla bla bla!!!",
    content: "Post 3 content!!!",
    slug: "post-three",
  },
];

const contentDir = join(process.cwd(), "content");

export const getPostSlugs = () => {
  return fs.readdirSync(contentDir);
};

export const getAllPosts = (details) => {
  return posts;
};

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}
