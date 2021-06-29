import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Anchor = styled(AnchorLink)`
  text-decoration: none;
  color: currentColor;
`;

export const SectionButtonsContainer = styled.div`
  overflow: auto;
  width: 100%;
  white-space: nowrap;
  display: flex;
  justify-content: center;
`;
