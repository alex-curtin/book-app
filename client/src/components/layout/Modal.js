import React from 'react';
import styled from 'styled-components';
import { setColor, setFlex, setBorder, setRem } from './styles';
import { Button } from './Button';
import modalContent from '../../constants/modal';

const Modal = ({ children, isOpen, type, actions }) => {
  const content = modalContent[type];

  return (
    <ModalWrapper isOpen={isOpen}>
      <article>{children}</article>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${setColor.overlayBlack};
  ${setFlex()};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  z-index: 1;

  article {
    background: ${setColor.lightGrey};
    ${setFlex({ x: 'space-between' })};
    flex-direction: column;
    padding: ${setRem()};
  }

  button {
    margin-left: ${setRem(8)};
  }
`;

export default Modal;
