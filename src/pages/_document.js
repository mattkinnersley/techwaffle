import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const isLocal = process.env.NODE_ENV === "development";
    return (
      <Html lang="en">
        <Head>
          <script src="/js/theme.js"></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-8QHRB6454Z"
          ></script>
          {!isLocal && <script src="/js/ga.js"></script>}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
