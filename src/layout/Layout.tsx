import { GlobalStyles } from '../styles/global';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Main = styled.div`
  background-color: ${theme.colors.backgroundColor};
  color: ${theme.colors.textColor};
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
      <ThemeProvider theme={theme}>
        <Main>{children}</Main>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default Layout;
