import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/heading";
import PostList from "../components/post-list";
import Head from "next/head";

const postData = [{ title: "Post 1" }, { title: "Post 2" }];

const Index = ({ blogCategory }) => (
  <Layout>
    <Head>
      <title>Tech Waffle - Technology and Coding Blog</title>
      <link rel="icon" href="/waffle.ico" />
    </Head>
    <Heading />
    <p>{blogCategory}</p>

    <PostList posts={postData}></PostList>
  </Layout>
);

Index.getInitialProps = () => {
  return {
    blogCategory: "Tech",
  };
};

export default Index;
