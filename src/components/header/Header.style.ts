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
  margin: 24px 8px;
`;

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export const A = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.colors.textGray};
  transition: color 0.5s ease;

  &:hover {
    color: ${theme.colors.text};
    cursor: pointer;
  }
`;
