import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Social from "../components/about/social";

const twitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="transition duration-300 fill-current group-hover:text-blue-300"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

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
