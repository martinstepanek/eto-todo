import React, { FC, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import colors from '../../styles/colors';

interface ModalProps {
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children, isOpen, ...props }) => {
  const element = useMemo(() => document.createElement('div'), []);
  const modalRoot = useMemo(() => document.getElementById('modal-root'), []);

  useEffect(() => {
    modalRoot && modalRoot.appendChild(element);

    return () => {
      modalRoot && modalRoot.removeChild(element);
    };
  }, []);

  return ReactDOM.createPortal(
    <div {...props}>
      <div className="content">{children}</div>
    </div>,
    element
  );
};

export default styled(Modal)`
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)}
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);

  .content {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
    margin: auto;
    display: block;
    width: 90%;
    max-width: 320px;
    background-color: ${colors.textBackground};
    border-radius: 10px;
    min-height: 200px;
    padding: 30px 15px;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
