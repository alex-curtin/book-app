import React from 'react';
import styled from 'styled-components';
import { setColor, setFlex, setRem } from './styles';

const Modal = ({ children, isOpen }) => {
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
    padding: ${setRem(12)};
    border-radius: ${setRem(3)};
    text-align: center;
  }

  button {
    display: inline;
    margin-left: ${setRem(8)};
  }

  button:nth-of-type(1) {
    margin-left: 0;
  }

  .buttons {
    ${setFlex({ x: 'space-around' })};
  }

  input,
  select {
    margin-bottom: ${setRem()};
    width: 80%;
  }
`;

export default Modal;
