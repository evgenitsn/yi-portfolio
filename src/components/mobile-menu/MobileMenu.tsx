import Link from 'next/link';
import { Logo } from '..';
import { INSTAGRAM_URL, LINKS, YOUTUBE_URL } from '../../utils/constants';
import {
  A,
  Container,
  ExternalA,
  NavigationContainer,
  LinksContainer,
  Gutter,
  NavigationFooter,
} from './MobileMenu.style';
import { useRouter } from 'next/router';

interface Props {
  closeMobileMenu: () => void;
}

const MobileMenu: React.FC<Props> = ({ closeMobileMenu }) => {
  const router = useRouter();
  return (
    <Container>
      <NavigationContainer>
        <Link href={'/'}>
          <A active={true}>
            <Logo />
          </A>
        </Link>
        <LinksContainer>
          {LINKS.map(({ path, name }) => (
            <Gutter key={path}>
              <Link href={path}>
                <A
                  onClick={() => router.pathname === path && closeMobileMenu()}
                  active={router.pathname === path}
                >
                  {name}
                </A>
              </Link>
            </Gutter>
          ))}
        </LinksContainer>
      </NavigationContainer>
      <NavigationFooter>
        <Gutter>
          <ExternalA target='_blank' href={INSTAGRAM_URL}>
            Instagram
          </ExternalA>
        </Gutter>
        <Gutter>
          <ExternalA target='_blank' href={YOUTUBE_URL}>
            YouTube
          </ExternalA>
        </Gutter>
      </NavigationFooter>
    </Container>
  );
};

export default MobileMenu;
