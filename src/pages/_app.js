import Layout from "@techwaffle/components/layout";
import { MDXProvider } from "@mdx-js/react";
import "@techwaffle/styles";
import PostSeries from "@techwaffle/components/post-series";
import PostLayout from "@techwaffle/components/post-layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={{ wrapper: PostLayout, PostSeries }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
