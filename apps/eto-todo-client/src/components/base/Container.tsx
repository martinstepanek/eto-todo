import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const Container = styled.div`
  width: 290px;
  margin: auto;

  ${breakpoints.md} {
    width: 688px;
  }

  ${breakpoints.xl} {
    width: auto;
    padding: 0 40px;
    margin: unset;
  }
`;

export { Container };
