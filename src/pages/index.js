import React from "react";
import Heading from "../components/heading";
import PostList from "../components/post-list";
import { getAllPosts } from "../utils";
import HeroPost from "../components/hero";

const Index = ({ posts, hero }) => (
  <>
    <Heading />
    <div className="mt-8">
      <h2 className="text-2xl font-quicksand-bold my-4">Latest</h2>
      <HeroPost post={hero}></HeroPost>
      {posts?.length > 0 && (
        <div>
          <h2 className="text-2xl font-quicksand-bold my-4">More Posts</h2>

          <PostList posts={posts}></PostList>
        </div>
      )}
    </div>
  </>
);

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  const posts = allPosts.slice(1);
  const hero = allPosts[0];

  return {
    props: {
      posts,
      hero,
      isHomepage: true,
      title: "Tech Waffle",
      description: "Just a load of waffle",
    },
  };
};

export default Index;
