import React from "react";
import Link from "next/link";

const PostThumbnail = ({ post: { title, description, slug } }) => {
  return (
    <div className="flex flex-col mt-4">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="flex-auto border-b hover:underline">{title}</a>
      </Link>
      <div className="flex-auto">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PostThumbnail;
