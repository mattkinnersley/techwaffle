import { useRouter } from "next/router";
import { getPost } from "../../utils";

export default function Post({ post }) {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Content: {post.content}</p>;
}

export async function getStaticProps({ params: { slug } }) {
  const { content } = getPost(slug);
  return {
    props: {
      post: {
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  // const posts = getAllPosts(["slug"]);

  return {
    paths: [{ params: { slug: "post-one" } }, { params: { slug: "post-two" } }],
    fallback: false,
  };
}
