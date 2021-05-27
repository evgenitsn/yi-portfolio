import styled from 'styled-components';

export const Overlay = styled.div`
  transition: opacity 0.75s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
  opacity: 1;
  display: block;
  height: auto;
  backface-visibility: hidden;

  &:hover div {
    opacity: 0.4;
    transition: opacity 0.75s ease;
    cursor: pointer;
  }

  &:hover ${Overlay} {
    opacity: 1;
  }
`;
