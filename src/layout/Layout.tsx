import { GlobalStyles } from '../styles/global';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Header } from '../components';

const Main = styled.main`
  background-color: ${theme.colors.backgroundColor};
  color: ${theme.colors.textColor};
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Main>
          <Header />
          {children}
        </Main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
