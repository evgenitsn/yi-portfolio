import styled from 'styled-components';

export const StyledLogo = styled.img`
  margin-bottom: 24px;
  width: 150px;
`;
const Logo = () => <StyledLogo src='/logo/logo-white.svg' alt='Logo' />;

export default Logo;
