import styled from 'styled-components';
import { memo } from 'react';

export const StyledLogo = styled.img`
  margin-bottom: 24px;
  width: 150px;
`;
const Logo = memo(() => <StyledLogo src='/logo/logo-white.svg' alt='Logo' />);

export default Logo;
