import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DOMAIN_NAME, META_DESCRIPTION, SITE_TITLE } from '../utils/constants';
import { GlobalStyles } from '../styles/global';
import FontFamilies from '../styles/font-families';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width, viewport-fit=cover'
        />
        <title>{SITE_TITLE}</title>
        <meta name='title' content={SITE_TITLE} />
        <meta name='description' content={META_DESCRIPTION} />
        <meta name='referrer' content='origin' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={DOMAIN_NAME} />
        <meta property='og:title' content={SITE_TITLE} />
        <meta property='og:description' content={META_DESCRIPTION} />
        <meta property='og:image' content='./thumbnail.png' />

        <meta property='twitter:card' content='./thumbnail.png' />
        <meta property='twitter:url' content={DOMAIN_NAME} />
        <meta property='twitter:title' content={SITE_TITLE} />
        <meta property='twitter:description' content={META_DESCRIPTION} />
        <meta property='twitter:image' content='./thumbnail.png' />

        <link rel='icon' type='image/png' href='./favicon.png' sizes='96x96' />
      </Head>
      <GlobalStyles />
      <FontFamilies />
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
