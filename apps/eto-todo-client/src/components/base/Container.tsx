import styled from 'styled-components';
import { medias } from '../../styles/breakpoints';

const Container = styled.div`
  width: 290px;
  margin: auto;

  ${medias.md} {
    width: 688px;
  }

  ${medias.lg} {
    width: auto;
    padding: 0 40px;
    margin: unset;
  }
`;

export { Container };
