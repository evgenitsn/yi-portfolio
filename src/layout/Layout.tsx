import { GlobalStyles } from '../styles/global';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>{children}</div>
      <GlobalStyles />
    </>
  );
};

export default Layout;
