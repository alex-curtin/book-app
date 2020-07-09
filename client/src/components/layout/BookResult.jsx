import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addBook } from '../../actions/book';
import { Button } from './Button.js';
import BookWrapper from './BookWrapper';
import AddBookModal from '../pages/SearchBooks/AddBookModal';

const BookResult = ({
  children,
  book,
  auth: { isAuthenticated },
  profile: { profile },
  addBook,
  listNames,
}) => {
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
        listNames={listNames}
        isOpen={showModal}
        handleSubmit={handleSubmit}
        toggleModal={toggleModal}
      />
      {children}
    </BookWrapper>
  );
};

BookResult.propTypes = {
  auth: PropTypes.object.isRequired,
  addBook: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { addBook })(BookResult);
