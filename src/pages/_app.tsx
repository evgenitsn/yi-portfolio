import type { AppProps } from 'next/app';
import Head from 'next/head';
import { META_DESCRIPTION } from '../utils/constants';
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
        <meta name='description' content={META_DESCRIPTION} />
        <meta name='referrer' content='origin' />
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
