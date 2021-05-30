import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-family: 'WorkSans', sans-serif;
  font-size: ${({ fontSize }) => fontSize || '5rem'};
  font-weight: bold;
  text-align: center;
  margin-top: 48px;
  margin-bottom: 48px;
`;
