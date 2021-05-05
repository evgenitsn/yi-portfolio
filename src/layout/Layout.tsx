import { GlobalStyles } from '../styles/global';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Header } from '../components';
import { MAX_PAGE_WIDTH } from '../styles/constants';

const Main = styled.main`
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  min-height: 100vh;
  padding-bottom: 32px;
`;

const ContentWrapper = styled.div`
  max-width: ${MAX_PAGE_WIDTH};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Main>
          <ContentWrapper>
            <Header />
            {children}
          </ContentWrapper>
        </Main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
