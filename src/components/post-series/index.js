import Link from "next/link";

const PostSeries = ({ series, currentPostSlug }) => {
  return (
    <div className="border-2 border-waffleLight dark:border-gray-800 rounded-md mt-12 text-center">
      {series.map(({ title, slug: seriesSlug }) => {
        if (seriesSlug === currentPostSlug) {
          return (
            <p className="p-2 m-2 font-bold bg-waffleLight dark:bg-gray-800 rounded-md">
              {title}
            </p>
          );
        } else if (seriesSlug) {
          return (
            <Link
              key={seriesSlug}
              as={`/posts/${seriesSlug}`}
              href="/posts/[slug]"
            >
              <a>
                <p className="transition-all p-2 m-2 rounded-md hover:bg-waffle dark:hover:bg-gray-700">
                  {title}
                </p>
              </a>
            </Link>
          );
        } else {
          return <p className="p-2 m-2">{title}</p>;
        }
      })}
    </div>
  );
};

export default PostSeries;
