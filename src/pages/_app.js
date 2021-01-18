import Layout from "../components/layout";
import "../styles.css";

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
