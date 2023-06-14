import { FaviconHead } from "components/commons/seo/faviconHead";
import { MetadataHead } from "components/commons/seo/metadataHead";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/*OpenGraph metadata*/}
        <MetadataHead
          title='Maxi Pinna - Intuitivo front-end test'
          type='website'
          url='https://maxipinna.com/'
          image='https://opengraph.githubassets.com/39b2f7fccdecddadb9dbde938a065439f116f01f3de6a070bc9daec06e25e98d/intuitivo-ai/front-test'
          description='Test front-end Intuitivo'
        />

        {/* Favicon */}
        <FaviconHead />

        {/* Google font */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
