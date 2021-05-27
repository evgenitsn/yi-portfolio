import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
`;
