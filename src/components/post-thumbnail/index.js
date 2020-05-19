import React from "react";
import Link from "next/link";

const PostThumbnail = ({ post: { title, slug } }) => {
  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-xl">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="flex-auto border-b hover:underline">{title}</a>
        </Link>
      </h3>
    </div>
  );
};

export default PostThumbnail;
