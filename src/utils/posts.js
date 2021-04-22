import fs from "fs";
import { join } from "path";
import { getMetaObjectFromSource } from "./mdx";

const contentDir = join(process.cwd(), "src/pages/posts");

export const getMetadataFromPost = (slug) => {
  const metadata = getMetaObjectFromSource(
    fs.readFileSync(join(contentDir, `${slug}.mdx`), "utf8")
  );
  return { slug, ...metadata };
};

export const getPostSlugs = () =>
  fs.readdirSync(contentDir).map((slug) => slug.replace(/\.mdx$/, ""));

export const getAllPosts = async () =>
  getPostSlugs()
    .map((slug) => getMetadataFromPost(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
