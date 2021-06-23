import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { MOBILE_BREAKPOINT } from '../../utils/constants';

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

export const ExternalA = styled(A)`
  opacity: 1;
  text-transform: unset;
`;

export const Container = styled.div`
  position: absolute;
  background-color: ${theme.colors.black};
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100vh;
  z-index: 4;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  display: none;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const Gutter = styled.div`
  margin: 24px;
`;

export const NavigationFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 120px;
`;
