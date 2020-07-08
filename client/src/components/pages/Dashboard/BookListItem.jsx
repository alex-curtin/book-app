import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { Button } from '../../layout/Button';
import Modal from '../../layout/Modal';
import { deleteBook } from '../../../actions/bookList';

import {
  setTransition,
  setColor,
  setRem,
  setFlex,
  setShadow,
} from '../../layout/styles';

const BookListItem = ({ book, deleteBook, listName }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper showModal={showModal}>
      <Modal isOpen={showModal} className='modal'>
        <p>delete book?</p>
        <Button theme='danger' onClick={() => deleteBook(book._id, listName)}>
          delete
        </Button>
        <Button theme='secondary' onClick={() => setShowModal(false)}>
          cancel
        </Button>
      </Modal>

      <img src={book.imgUrl} alt={book.title} />
      <div className='overlay'>
        <FaTrashAlt className='delete' onClick={() => setShowModal(true)} />
        <Button theme='secondary'>view details</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: ${setRem()};
  ${setShadow.light};
  &:hover {
    .overlay {
      visibility: ${(props) => (props.showModal ? 'hidden' : 'visible')};
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
    visibility: hidden;
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

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps, { deleteBook })(BookListItem);
