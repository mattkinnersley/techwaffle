import { useEffect } from "react";
import Heading from "@techwaffle/components/heading";
import HeroPost from "@techwaffle/components/hero";
import Meta from "@techwaffle/components/meta";
import PostList from "@techwaffle/components/post-list";
import { getAllPosts } from "@techwaffle/utils/posts";
import { sendScreenViewEvent } from "@techwaffle/utils/ga";

const Index = ({ posts, hero }) => {
  const title = "Tech Waffle - Just a load of waffle";

  useEffect(() => {
    sendScreenViewEvent({ title });
  }, []);

  return (
    <>
      <Meta
        title={title}
        description="A tech blog that has tutorials, web development tips, best practices and more. Find out about the latest technology in JavaScript and software engineering."
      />
      <Heading />
      <div className="mt-8">
        <h2 className="text-2xl font-quicksand-bold my-4">Latest</h2>
        <HeroPost post={hero}></HeroPost>
        {posts?.length > 0 && <PostList posts={posts}></PostList>}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  const posts = allPosts.slice(1);
  const hero = allPosts[0];

  return {
    props: {
      posts,
      hero,
    },
  };
};

export default Index;
