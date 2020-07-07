import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { Button } from '../../layout/Button';

import { setTransition, setColor, setRem, setFlex } from '../../layout/styles';

const BookListItem = ({ book }) => {
  return (
    <Wrapper>
      <img src={book.imgUrl} altt={book.title} />
      <div className='overlay'>
        <FaTrashAlt className='delete' />
        <Button theme='secondary'>view details</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: ${setRem()};
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${setFlex({ x: 'space-between', y: 'flex-end' })};
    flex-direction: column;
    opacity: 0;
    ${setTransition};
    background: ${setColor.overlayBlack};
    padding: ${setRem(8)};
  }
  .delete {
    color: ${setColor.dangerDark};
    cursor: pointer;
  }
  button {
    align-self: center;
    margin: auto 0;
  }
`;

export default BookListItem;
