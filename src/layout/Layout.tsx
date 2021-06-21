import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Head, Header } from '../components';
import { MAX_PAGE_WIDTH } from '../styles/constants';
import { MobileMenu } from '../components/';
import { useState } from 'react';
import MenuCross from '../icons/menu-cross.svg';
import MenuLines from '../icons/menu-lines.svg';
import { MOBILE_BREAKPOINT } from '../utils/constants';

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

const MobileMenuButton = styled.button`
  position: absolute;
  right: 48px;
  top: 48px;
  z-index: 10;
  background: none;
  border: none;
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

const Layout: React.FC<Props> = ({ children, title }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // TODO: Head titles?
  return (
    <>
      <Head title={title} />
      <ThemeProvider theme={theme}>
        <Body>
          <Main>
            <ContentWrapper>
              <MobileMenuButton
                onClick={() =>
                  setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen)
                }
              >
                {isMobileMenuOpen ? <MenuCross /> : <MenuLines />}
              </MobileMenuButton>
              <Header />
              {isMobileMenuOpen ? <MobileMenu /> : null}
              {children}
            </ContentWrapper>
          </Main>
          <Footer>© {new Date().getFullYear()} Yordan Ivanov</Footer>
        </Body>
      </ThemeProvider>
    </>
  );
};

export default Layout;
