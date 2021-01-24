import { useRouter } from "next/router";
import Link from "next/link";
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
        {post.seriesPaths && (
          <div className="bg-waffleLight dark:bg-gray-800">
            {post.seriesPaths.map(path => (
              <Link as={path} href="/posts/[slug]">
                <a>
                  <div className="rounded-md border-2 border-gray-800 dark:border-yellow-50 flex flex-col md:flex-row items-center justify-between p-4 thumbnail-shadow text-center m-4">
                    <h3 className="font-quicksand-bold">{path}</h3>
                  </div>
                </a>
              </Link>
            ))}
          </div>
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
  const { title, subtitle, date, series, author, content, excerpt } = getPostBySlug(
    slug
  );
  const seriesPaths = series?.split(",").map(slug => `/posts/${slug}`) || ''
  const htmlContent = await markdownToHtml(content || "");
  return {
    props: {
      title: `${title}: ${subtitle} - Tech Waffle`,
      description: excerpt,
      post: {
        title,
        date,
        seriesPaths,
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
