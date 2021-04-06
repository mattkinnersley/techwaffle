import PostSeries from "@techwaffle/components/post-series";
import { getPostBySlug, getPostSlugs } from "@techwaffle/utils/posts";
import hydrate from "next-mdx-remote/hydrate";

const Post = ({ mdxSource, data }) => {
  const content = hydrate(mdxSource, { components: { PostSeries } });

  return (
    <>
      <article className="flex flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">{data.title}</h1>
        </div>

        <div className="markdown min-w-full">{content}</div>
      </article>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { mdxSource, ...data } = await getPostBySlug(params.slug);
  return {
    props: {
      title: `${data.title}: ${data.subtitle} - Tech Waffle`,
      description: data.excerpt,
      mdxSource,
      data,
    },
  };
};

export async function getStaticPaths() {
  const postSlugs = getPostSlugs();

  return {
    paths: postSlugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
