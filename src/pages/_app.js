import Layout from "@techwaffle/components/layout";
import "@techwaffle/styles";

export default function MyApp({
  Component,
  pageProps: { title, description, ...pageProps },
}) {
  return (
    <Layout title={title} description={description}>
      <Component {...pageProps} />
    </Layout>
  );
}
