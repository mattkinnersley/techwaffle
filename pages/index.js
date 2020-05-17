import React from "react";
import Head from "next/head";

const Home = () => (
  <div className="flex flex-col items-center text-center font-quicksand">
    <Head>
      <title>Tech Waffle | The Tech Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h1 className="text-waffle logo-shadow font-lemon text-6xl my-10">
        Tech Waffle
      </h1>
      <p className="text-4xl">Coming soon...</p>
    </div>
  </div>
);

export default Home;
