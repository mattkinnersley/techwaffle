import React from "react";
import Link from "next/link";

import moment from "moment";

const PostThumbnail = ({ post: { title, slug, date } }) => {
  return (
    <div className="mb-8">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <div className="transition duration-300 ease-in-out border-2 border-black flex flex-col md:flex-row items-center justify-between p-2 thumbnail-shadow text-center">
            <h3 className="text-xl font-quicksand-bold">{title}</h3>
            <span>{moment(date).format("D MMMM")}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostThumbnail;
