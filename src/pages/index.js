import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/heading";
import PostList from "../components/post-list";
import Head from "next/head";
import { getAllPosts } from "../utils";
import HeroPost from "../components/hero";

const Index = ({ posts, hero }) => (
  <Layout isHomepage={true}>
    <Head>
      <title>Tech Waffle - Technology and Coding Blog</title>
      <link rel="icon" href="/waffle.ico" />
    </Head>
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
  </Layout>
);

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const posts = allPosts.slice(1);
  const hero = allPosts[0];

  return {
    props: { posts, hero },
  };
};

export default Index;
