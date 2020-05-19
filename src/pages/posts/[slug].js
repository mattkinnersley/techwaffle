import { useRouter } from "next/router";
import { getPostBySlug, markdownToHtml } from "../../utils";

export default function Post({ post }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author.name}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <p></p>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  // const posts = getAllPosts(["slug"]);

  return {
    paths: [
      { params: { slug: "first-post" } },
      { params: { slug: "second-post" } },
    ],
    fallback: false,
  };
}
