import { useRouter } from "next/router";
import { getPostBySlug, markdownToHtml, getAllPosts } from "../../utils";
import Social from "../../components/about/Social";
import { twitterIcon } from "../../components/social/Twitter";

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
        <div
          className="markdown min-w-full"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </article>
      <h3 className="text-center mt-4 mb-2">Follow me on twitter</h3>
      <Social
        href="https://twitter.com/techwaffler"
        icon={twitterIcon}
        handle="@techwaffler"
      ></Social>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const { title, date, author, content, excerpt } = getPostBySlug(slug);
  const htmlContent = await markdownToHtml(content || "");
  return {
    props: {
      title: `${title} - Tech Waffle`,
      description: excerpt,
      post: {
        title,
        date,
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
