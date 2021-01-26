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
        content="https://www.techwaffle.dev/waffle-400x400.png"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://www.techwaffle.dev/techwaffle-heading.png"
      />
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;
