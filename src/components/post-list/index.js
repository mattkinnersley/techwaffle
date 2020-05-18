import React from "react";
import ListItem from "./ListItem";

const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col items-start">
      {posts.map((data) => (
        <ListItem key={Math.random()} data={data}></ListItem>
      ))}
    </div>
  );
};

export default PostList;
