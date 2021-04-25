import Layout from "@techwaffle/components/layout";
import { MDXProvider } from "@mdx-js/react";
import "@techwaffle/styles";
import mdxComponents from "@techwaffle/components/mdx-components";

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdxComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
