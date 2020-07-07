import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addBook } from '../../../actions/book';
import { selectBookIds } from '../../../selectors/profile';
import { Button } from '../../layout/Button.js';
import BookWrapper from '../../layout/BookWrapper';
import AddBookModal from './AddBookModal';

const BookItem = ({
  book,
  auth: { isAuthenticated },
  profile: { profile },
  addBook,
  bookIds,
  listNames,
}) => {
  const [showModal, setShowModal] = useState(false);

  const {
    id,
    volumeInfo: {
      title,
      authors,
      description = 'no description available',
      imageLinks = {},
    },
  } = book;

  const { thumbnail = '' } = imageLinks;

  const handleSubmit = async (listName) => {
    const bookData = {
      title,
      authors,
      description,
      imgUrl: thumbnail,
      googleId: id,
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
      <img src={thumbnail} alt={title} />

      <div className='book-details'>
        <div className='top'>
          <div>
            <h6>{title}</h6>
            {authors && <p>by {authors.join(', ').slice(0, 100)}</p>}
          </div>
        </div>

        <small>{`${description.slice(0, 150).trim()}...`}</small>

        {isAuthenticated &&
          (profile !== null ? (
            <div className='bottom'>
              <Button onClick={toggleModal}>add to list</Button>
            </div>
          ) : (
            <div className='bottom'>
              create a profile to add books to your lists
            </div>
          ))}
      </div>
    </BookWrapper>
  );
};

BookItem.propTypes = {
  auth: PropTypes.object.isRequired,
  addBook: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  bookIds: selectBookIds(state),
});

export default connect(mapStateToProps, { addBook })(BookItem);
