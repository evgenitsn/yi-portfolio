import { GlobalStyles } from '../styles/global';
import Head from 'next/head';
import styled from 'styled-components';
import { colors } from '../styles/theme';

const Main = styled.main`
  background-color: ${colors.backgroundColor};
  color: ${colors.textColor};
  min-height: 100vh;
`;

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
      <Main>{children}</Main>
      <GlobalStyles />
    </>
  );
};

export default Layout;
