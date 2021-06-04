import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { MOBILE_BREAKPOINT } from '../../utils/constants';

export const SectionTitle = styled.h2`
  color: ${theme.colors.text};
  font-family: 'WorkSans', sans-serif;
  font-size: ${({ fontSize }) => fontSize || '5rem'};
  font-weight: bold;
  text-align: center;
  margin-top: 48px;
  margin-bottom: 48px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: ${({ fontSize }) => fontSize || '3.2rem'};
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
