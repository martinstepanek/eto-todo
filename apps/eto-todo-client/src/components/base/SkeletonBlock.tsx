import styled from 'styled-components';
import colors from '../../styles/colors';

const SkeletonBlock = styled.div`
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholder-shimmer;
  animation-timing-function: linear;
  background: ${colors.textBackground};
  background: linear-gradient(
    to right,
    ${colors.textBackground} 8%,
    #1f1f1f 18%,
    ${colors.textBackground} 33%
  );
  background-size: 800px 104px;
  position: relative;
`;

export { SkeletonBlock };
