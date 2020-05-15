import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>Tech Waffle | The Tech Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h1>Tech Waffle</h1>
      <p>The Tech Blog</p>
      <div>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
          <li>Post 4</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Home;
