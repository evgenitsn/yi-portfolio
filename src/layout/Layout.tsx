import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Head, Header } from '../components';
import { MobileMenu } from '../components/';
import { useState } from 'react';
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
                {isMobileMenuOpen ? (
                  <img src={'./icons/menu-cross.svg'} alt='Arrow' />
                ) : (
                  <img src={'./icons/menu-lines.svg'} alt='Arrow' />
                )}
              </MobileMenuButton>
              <Header />
              {isMobileMenuOpen ? <MobileMenu /> : null}

              <FixedSocialIcons>
                <a target='_blank' href={INSTAGRAM_URL} rel='noreferrer'>
                  <SocialIcon src={'./icons/instagram.svg'} alt='Instagram' />
                </a>
                <a target='_blank' href={YOUTUBE_URL} rel='noreferrer'>
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
