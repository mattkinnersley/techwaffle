import React from "react";
import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/waffle.ico" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@techwaffler" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.techwaffle.dev/waffle.png"
      />
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;
