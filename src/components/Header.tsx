import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <header>
      <Title>Title</Title>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/photography'>
              <a>Photography</a>
            </Link>
          </li>
          <li>
            <Link href='/videos'>
              <a>Videos</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
