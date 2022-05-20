import React from 'react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" href="default-icon.png" />
        <meta name="title" content="" />
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="image" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:url" content="" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={'https://asd.com'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
