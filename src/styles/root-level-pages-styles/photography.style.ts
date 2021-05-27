import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// TODO: Check other wrappers in same folder.
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
