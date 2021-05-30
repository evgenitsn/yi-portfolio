import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../../utils/constants';

export const Wrapper = styled.div`
  width: 90%;
  margin-top: 48px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`;

export const VideoList = styled.ul`
  flex-direction: column;
`;

export const VideoWrapper = styled.li`
  margin-bottom: 32px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 24px;
  }
`;
