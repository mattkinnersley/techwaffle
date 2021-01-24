import { useRouter } from "next/router";
import PostSeries from "../../components/post-series";
import { getPostBySlug, markdownToHtml, getAllPosts } from "../../utils";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <article className="flex flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">{post.title}</h1>
        </div>
        {post.seriesPosts && (
          <PostSeries
            series={post.seriesPosts}
            currentPostSlug={post.slug}
          ></PostSeries>
        )}

        <div
          className="markdown min-w-full"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </article>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const {
    title,
    subtitle,
    date,
    series,
    author,
    content,
    excerpt,
  } = getPostBySlug(slug);
  const seriesPosts =
    series?.split(",").map((slug, index) => {
      const { title } = getPostBySlug(slug);
      if (!title) {
        return { title: `Part ${index + 1} coming soon` };
      }
      return { title, slug };
    }) || "";

  const htmlContent = await markdownToHtml(content || "");
  return {
    props: {
      title: `${title}: ${subtitle} - Tech Waffle`,
      description: excerpt,
      post: {
        title,
        date,
        seriesPosts,
        author,
        htmlContent,
        excerpt,
        slug,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
