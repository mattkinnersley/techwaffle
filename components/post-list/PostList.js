import React from "react";
import ListItem from "./ListItem";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((data) => (
        <ListItem data={data}></ListItem>
      ))}
    </div>
  );
};

export default PostList;
