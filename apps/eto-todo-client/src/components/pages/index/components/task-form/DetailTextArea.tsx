import styled from 'styled-components';
import { TextArea } from '../../../../base/form/TextArea';

export interface DetailTextAreaProps {
  isVisible: boolean;
}

const DetailTextArea = styled(TextArea)<DetailTextAreaProps>`
  transition: 0.3s ease;

  ${({ isVisible }) =>
    isVisible
      ? `
       height: 100px;
       padding: 10px 15px;
       margin: 10px 0;
    `
      : `
       height: 0;
       padding: 0 15px;
       margin: 0;
    `}

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export { DetailTextArea };
