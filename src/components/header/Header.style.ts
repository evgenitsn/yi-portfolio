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
  margin: 24px 1.5vw;
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
  /* TODO: Fix colours */
  color: ${({ active }) =>
    active ? theme.colors.text : theme.colors.textGray};
  transition: color 0.5s ease;

  &:hover {
    color: ${theme.colors.text};
    cursor: pointer;
  }
`;
