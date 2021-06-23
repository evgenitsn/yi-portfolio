import styled from 'styled-components';
import { MAX_PAGE_WIDTH } from '../styles/constants';
import { theme } from '../styles/theme';
import { MOBILE_BREAKPOINT } from '../utils/constants';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  display: flex;
  flex: 1;
`;

export const Footer = styled.footer`
  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
  text-align: center;
  padding: 48px;
`;

export const ContentWrapper = styled.div`
  max-width: ${MAX_PAGE_WIDTH};
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 95%;
  }
`;

export const MobileMenuButton = styled.button`
  position: absolute;
  right: 5%;
  top: 48px;
  z-index: 10;
  background: none;
  border: none;
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
  }
`;

export const FixedSocialIcons = styled.div`
  position: fixed;
  right: 9vw;
  top: 30%;
  transform: translateY(-30%);
  display: flex;
  flex-direction: column;

  @media (max-width: 1600px) {
    right: 6vw;
  }
  @media (max-width: 1200px) {
    right: 5vw;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

export const SocialIcon = styled.img`
  margin-bottom: 36px;
  transform: scale(1.2);
`;
