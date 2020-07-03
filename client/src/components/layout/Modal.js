import React from 'react';
import styled from 'styled-components';
import { setColor, setFlex, setBorder, setRem } from './styles';
import { Button } from './Button';
import modalContent from '../../constants/modal';

const Modal = ({ isOpen, toggleModal, type, actions }) => {
  const content = modalContent[type];

  return (
    <ModalWrapper isOpen={isOpen}>
      <article>
        <div>{content.message}</div>

        <div>
          {content.buttons.map((button) => (
            <Button
              type={button.type}
              onClick={actions[button.action]}
              key={button.id}
            >
              {button.text}
            </Button>
          ))}
          <Button onClick={toggleModal}>cancel</Button>
        </div>
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

  button {
    margin-left: ${setRem(8)};
  }
`;

export default Modal;
