import Layout from "../components/layout";
import "../styles.css";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({
  Component,
  pageProps: { isHomepage = false, title, description, ...pageProps },
}) {
  return (
    <Layout isHomepage={isHomepage} title={title} description={description}>
      <Component {...pageProps} />
    </Layout>
  );
}
