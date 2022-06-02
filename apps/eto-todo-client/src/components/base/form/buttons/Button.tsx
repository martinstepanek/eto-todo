import styled from 'styled-components';
import colors from '../../../../styles/colors';

export interface ButtonProps {
  size?: 'md' | 'lg';
}

const Button = styled.button<ButtonProps>`
  background-color: ${colors.primary};
  color: ${colors.text};
  border: 0;
  outline: 0;
  user-select: none;
  display: inline-block;
  font-weight: 700;
  ${({ size }) =>
    size === 'lg' &&
    `
      padding: 20px 40px;
      border-radius: 10px;
      font-size: 1.1em;
  `}

  &:disabled {
    background-color: ${colors.background};
    border: 3px solid ${colors.textBackground};
  }
`;

export { Button };
