import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../../actions/book';
import { Button } from '../../layout/Button.js';
import BookWrapper from '../../layout/BookWrapper';
import AddBookModal from './AddBookModal';

const BookItem = ({ book, auth: { isAuthenticated }, addBook }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    id,
    volumeInfo: {
      title,
      subtitle = '',
      authors,
      description = 'no description available',
      imageLinks = {},
      publisher = '',
      publishedDate = '',
      mainCategory = '',
    },
  } = book;

  const { thumbnail = '' } = imageLinks;

  const handleSubmit = async (listName) => {
    const bookData = {
      title,
      subtitle,
      authors,
      description,
      imgUrl: thumbnail,
      googleId: id,
      publisher,
      publishedDate,
      category: mainCategory,
    };
    addBook(bookData, listName);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <BookWrapper className='book-item'>
      <AddBookModal
        isOpen={showModal}
        handleSubmit={handleSubmit}
        toggleModal={toggleModal}
      />
      <img src={thumbnail} alt={title} />

      <div className='book-details'>
        <div className='top'>
          <div>
            <h6>{title}</h6>
            {authors && <p>by {authors.join(', ').slice(0, 100)}</p>}
          </div>
        </div>

        <small>{`${description.slice(0, 150).trim()}...`}</small>

        {isAuthenticated && (
          <div className='bottom'>
            <Button onClick={toggleModal}>add to list</Button>
          </div>
        )}
      </div>
    </BookWrapper>
  );
};

BookItem.propTypes = {
  auth: PropTypes.object.isRequired,
  addBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addBook })(BookItem);
