import Link from 'next/link';
import { Wrapper, Title, NavList, NavListItem, A } from './Header.style';

const Header = () => {
  return (
    <Wrapper>
      <Title>YI</Title>
      <nav>
        <NavList>
          <NavListItem>
            <Link href='/'>
              <A>Home</A>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href='/photography'>
              <A>Photography</A>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href='/video'>
              <A>Video</A>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href='/contact'>
              <A>Contact</A>
            </Link>
          </NavListItem>
        </NavList>
      </nav>
    </Wrapper>
  );
};

export default Header;
