import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Social from "../components/about/Social";
import { twitterIcon } from "../components/Twitter";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/waffle.ico" />
      </Head>
      <div className="text-center">
        <div>
          <h1 className="text-4xl">About Me</h1>
        </div>
        <div className="flex flex-col my-5">
          <p className="mb-4">Hi, I'm Matt Kinnersley</p>
          <p className="mb-4">
            I'm a software developer looking to help people where I can. I am
            primarily focused on web development but I am interested in other
            areas too. This blog will be a place for me to document my learning.
          </p>
          <p>
            If I learn something new that I think could help someone else, I'll
            share it on here. You might also see tutorials on here from time to
            time.
          </p>
        </div>
        <div className="flex flex-col items-center min-w-full"></div>
        <p className="mb-4">Follow me on twitter for updates</p>
        <Social
          href="https://twitter.com/techwaffler"
          icon={twitterIcon}
          handle="@techwaffler"
        ></Social>
      </div>
    </Layout>
  );
};

export default About;
