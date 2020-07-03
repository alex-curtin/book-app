import React from 'react';
import styled from 'styled-components';
import { setColor, setFlex, setBorder, setRem } from './styles';
import { Button } from './Button';

const Modal = ({ isOpen, toggleModal }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <article>
        delete this book?
        <Button onClick={toggleModal}>cancel</Button>
      </article>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  ${setFlex()};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};

  article {
    width: 50%;
    height: 50%;
    background: ${setColor.lightGrey};
    ${setFlex({ x: 'space-between' })};
    flex-direction: column;
    padding: ${setRem()};
  }
`;

export default Modal;
