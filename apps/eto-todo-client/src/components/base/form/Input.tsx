import styled from 'styled-components';
import colors from '../../../styles/colors';
import { styleVariables } from '../../../styles/global';
import { medias } from '../../../styles/breakpoints';

const Input = styled.input`
  font-family: ${styleVariables.fontFamily};
  font-size: ${styleVariables.fontSize};
  background-color: ${colors.textBackground};
  color: ${colors.text};
  border: 0;
  padding: 10px 15px;
  display: block;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${colors.mutedText};
  }

  ${medias.sm} {
    font-size: ${styleVariables.fontSizeLg};
  }
`;

export { Input };
