import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { Button, SmallButton } from '../../layout/Button';
import Modal from '../../layout/Modal';
import { deleteBook } from '../../../actions/bookList';
import { setColor, setRem, setFlex, setShadow } from '../../layout/styles';

const BookListItem = ({ book, deleteBook, listName, bookId }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper showModal={showModal}>
      <Modal isOpen={showModal} className='modal'>
        <h6>delete book?</h6>
        <div className='buttons'>
          <SmallButton
            theme='danger'
            onClick={() => deleteBook(book._id, listName)}
          >
            delete
          </SmallButton>
          <SmallButton theme='secondary' onClick={() => setShowModal(false)}>
            cancel
          </SmallButton>
        </div>
      </Modal>

      <img src={book.imgUrl} alt={book.title} />
      <div className='overlay'>
        <FaTrashAlt className='delete' onClick={() => setShowModal(true)} />
        <Link to={`/${listName}/${bookId}`}>
          <Button theme='secondary'>view details</Button>
        </Link>
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
  a {
    align-self: center;
    margin: auto 0;
  }
  h6 {
    margin-bottom: ${setRem(8)};
  }
`;

BookListItem.propTypes = {
  book: PropTypes.object.isRequired,
  deleteBook: PropTypes.func.isRequired,
  listName: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps, { deleteBook })(BookListItem);
