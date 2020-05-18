import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import ListItem from "../components/post-list/ListItem";
import Logo from "../components/Logo";
import Subtitle from "../components/Subtitle";
import Heading from "../components/Heading";
import PostList from "../components/post-list/PostList";

const postData = [{ title: "Post 1" }, { title: "Post 2" }];

const Home = () => (
  <Layout>
    <Head>
      <title>Tech Waffle | The Tech Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Heading>
      <Logo></Logo>
      <Subtitle></Subtitle>
    </Heading>

    <PostList posts={postData}></PostList>
  </Layout>
);

export default Home;
