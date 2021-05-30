import styled from 'styled-components';

export const Overlay = styled.div`
  transition: opacity 0.75s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const ImageContainer = styled.div`
  flex: 1;
  flex-basis: 190px;
  margin: 16px;
  position: relative;
  text-align: center;
  backface-visibility: hidden;
  &:hover {
    cursor: ${({ withOverlay }) => (withOverlay ? 'pointer' : 'auto')};
  }

  img {
    opacity: ${({ withOverlay }) => (withOverlay ? 0.6 : 1)};
    transition: opacity 0.75s ease;
  }
  &:hover img {
    opacity: 1;
    transition: opacity 0.75s ease;
  }
`;

export const PhotosWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
