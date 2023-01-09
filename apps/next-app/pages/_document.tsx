import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  override render() {
    return (
      <Html lang="en">
        <div className="bg-black text-white">
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <body className="bg-black">
            <Main />
            <NextScript />
          </body>
        </div>
      </Html>
    );
  }
}

export default Document;
