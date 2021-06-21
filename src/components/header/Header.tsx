import Link from 'next/link';
import { useRouter } from 'next/router';
import { Wrapper, NavList, NavListItem, A } from './Header.style';
import { Logo } from '../';
import { LINKS } from '../../utils/constants';

const Header = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Link href={'/'}>
        <A active={true}>
          <Logo />
        </A>
      </Link>

      <nav>
        <NavList>
          {LINKS.map(({ path, name }) => (
            <NavListItem key={path}>
              <Link href={path}>
                <A active={router.pathname === path}>{name}</A>
              </Link>
            </NavListItem>
          ))}
        </NavList>
      </nav>
    </Wrapper>
  );
};

export default Header;
