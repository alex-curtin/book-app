import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addBook } from '../../../actions/book';
import {
  setRem,
  setFlex,
  setColor,
  setTransition,
  setShadow,
} from '../../layout/styles';
import AddBookModal from '../SearchBooks/AddBookModal';
import { Button } from '../../layout/Button';

const RecomendedItem = ({ book, addBook, bookList }) => {
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

  const listNames = bookList.currentUserLists.map((list) => list.name);

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
    <ItemWrapper>
      <AddBookModal
        listNames={listNames}
        isOpen={showModal}
        handleSubmit={handleSubmit}
        toggleModal={toggleModal}
      />

      <img src={thumbnail} alt={title} />

      <div className='overlay'>
        <Button onClick={toggleModal}>Add Book</Button>
      </div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: inline-block;
  margin-right: ${setRem()};
  margin-bottom: ${setRem()};
  position: relative;
  ${setShadow.medium};
  max-height: ${setRem(200)};
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
  img {
    height: ${setRem(200)};
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${setColor.overlayBlack};
    ${setFlex()};
    opacity: 0;
    ${setTransition()};
  }
`;

RecomendedItem.propTypes = {
  book: PropTypes.object.isRequired,
  addBook: PropTypes.func.isRequired,
  bookList: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps, { addBook })(RecomendedItem);
