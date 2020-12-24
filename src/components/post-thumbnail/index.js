import React from "react";
import Link from "next/link";

import moment from "moment";

const PostThumbnail = ({ post: { title, slug, date } }) => {
  return (
    <div className="mb-8 active:shadow-inner">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <div className="transition-shadow duration-300 rounded-md border-2 border-gray-800 dark:border-yellow-50 flex flex-col md:flex-row items-center justify-between p-4 thumbnail-shadow text-center">
            <h3 className="text-xl font-quicksand-bold">{title}</h3>
            <span>{moment(date).format("D MMMM")}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostThumbnail;
