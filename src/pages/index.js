import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/heading";
import PostList from "../components/post-list";
import Head from "next/head";
import { getAllPosts } from "../utils";

const Index = ({ posts }) => (
  <Layout>
    <Head>
      <title>Tech Waffle - Technology and Coding Blog</title>
      <link rel="icon" href="/waffle.ico" />
    </Head>
    <Heading />
    <p>Latest Post: {posts[0].title}</p>

    <PostList posts={posts}></PostList>
  </Layout>
);

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default Index;
