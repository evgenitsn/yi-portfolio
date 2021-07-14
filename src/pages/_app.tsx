import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DOMAIN_NAME, META_DESCRIPTION, SITE_TITLE } from '../utils/constants';
import { GlobalStyles } from '../styles/global';
import FontFamilies from '../styles/font-families';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageView } from '../utils/analytics';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      pageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
        <meta property='og:image' content={`${DOMAIN_NAME}thumbnail.png`} />

        <meta property='twitter:card' content={`${DOMAIN_NAME}thumbnail.png`} />
        <meta property='twitter:url' content={DOMAIN_NAME} />
        <meta property='twitter:title' content={SITE_TITLE} />
        <meta property='twitter:description' content={META_DESCRIPTION} />
        <meta
          property='twitter:image'
          content={`${DOMAIN_NAME}thumbnail.png`}
        />

        <link rel='icon' type='image/png' href='./favicon.png' sizes='96x96' />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
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
