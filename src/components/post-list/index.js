import React from "react";
import PostThumbnail from "../post-thumbnail";

const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <PostThumbnail key={Math.random()} post={post}></PostThumbnail>
      ))}
    </div>
  );
};

export default PostList;
