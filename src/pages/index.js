import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/heading";
import PostList from "../components/post-list";
import Head from "next/head";

const postData = [
  { title: "Post 1", description: "Post 1 Description here bla bla bla" },
  {
    title: "Post 2",
    description: "Post 2 Description goes here bla bla bla!!!",
  },
];

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
  const posts = postData;

  return {
    props: { posts },
  };
};

export default Index;
