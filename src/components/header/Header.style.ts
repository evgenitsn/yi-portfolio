import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const NavListItem = styled.li`
  /* TODO: should this be vw? */
  margin: 24px 3vw;
`;

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
`;

export const A = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  color: ${theme.colors.text};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  margin-bottom: 16px;
`;
