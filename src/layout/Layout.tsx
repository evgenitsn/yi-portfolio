import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Head, Header } from '../components';
import { MobileMenu } from '../components/';
import { useState } from 'react';
import ScrollLock from 'react-scrolllock';
import {
  Body,
  Main,
  Footer,
  ContentWrapper,
  MobileMenuButton,
  FixedSocialIcons,
  SocialIcon,
} from './Layout.style';
import { INSTAGRAM_URL, YOUTUBE_URL } from '../utils/constants';

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Head title={title} />
      <ScrollLock isActive={isMobileMenuOpen} />
      <ThemeProvider theme={theme}>
        <Body>
          <Main>
            <ContentWrapper>
              <MobileMenuButton
                onClick={() =>
                  setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen)
                }
              >
                {isMobileMenuOpen ? (
                  <img
                    src={'./icons/menu-cross.svg'}
                    width='44px'
                    height='44px'
                    alt='Close menu'
                  />
                ) : (
                  <img
                    src={'./icons/menu-lines.svg'}
                    width='44px'
                    height='44px'
                    alt='Open menu'
                  />
                )}
              </MobileMenuButton>
              <Header />
              {isMobileMenuOpen ? (
                <MobileMenu
                  closeMobileMenu={() => setIsMobileMenuOpen(false)}
                />
              ) : null}

              <FixedSocialIcons>
                <a
                  target='_blank'
                  href={INSTAGRAM_URL}
                  rel='noopener noreferrer'
                >
                  <SocialIcon src={'./icons/instagram.svg'} alt='Instagram' />
                </a>
                <a target='_blank' href={YOUTUBE_URL} rel='noopener noreferrer'>
                  <SocialIcon src={'./icons/youtube.svg'} alt='YouTube' />
                </a>
              </FixedSocialIcons>

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
