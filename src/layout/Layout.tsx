import { GlobalStyles } from '../styles/global';
import FontFamilies from '../styles/font-families';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Head, Header } from '../components';
import { MAX_PAGE_WIDTH } from '../styles/constants';

interface Props {
  title?: string;
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  display: flex;
  flex: 1;
`;

const Footer = styled.footer`
  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
  text-align: center;
  padding: 48px;
`;

const ContentWrapper = styled.div`
  max-width: ${MAX_PAGE_WIDTH};
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout: React.FC<Props> = ({ children, title }) => {
  // TODO: Head titles?
  return (
    <>
      <Head title={title} />
      <ThemeProvider theme={theme}>
        <Body>
          <Main>
            <ContentWrapper>
              <Header />
              {children}
            </ContentWrapper>
          </Main>
          <Footer>© {new Date().getFullYear()} Yordan Ivanov</Footer>
        </Body>
      </ThemeProvider>
      <GlobalStyles />
      <FontFamilies />
    </>
  );
};

export default Layout;
