import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../../../actions/book';
import { deleteBook } from '../../../actions/bookList';
import BookWrapper from '../../layout/BookWrapper';
import Modal from '../../layout/Modal';
import { Button } from '../../layout/Button';
import { FaTrashAlt } from 'react-icons/fa';

const Book = ({ item, addBook, deleteBook }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    title,
    authors = [],
    imgUrl,
    description = 'no description available',
  } = item.book;

  const setButton = () => {
    return item.status === 'read' ? 'to-read' : 'read';
  };

  const toggleStatus = (e) => {
    e.preventDefault();
    addBook(item.book, setButton());
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const removeBook = () => {
    deleteBook(item._id);
  };

  return (
    <BookWrapper className='book-item'>
      <Modal
        isOpen={modalOpen}
        toggleModal={toggleModal}
        type='deleteBook'
        actions={{ primary: removeBook }}
      />
      <img src={imgUrl} alt={title} />
      <div className='book-details'>
        <div className='top'>
          <div>
            <h6>{title}</h6>
            <p>by {authors.join(', ')}</p>
          </div>
          <FaTrashAlt className='delete' onClick={toggleModal} />
        </div>
        <small>{`${description.slice(0, 150).trim()}...`}</small>
        <div className='bottom'>
          <Button onClick={toggleStatus}>{`mark as ${setButton()}`}</Button>
        </div>
      </div>
    </BookWrapper>
  );
};

Book.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addBook, deleteBook })(Book);
