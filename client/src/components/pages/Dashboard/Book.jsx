import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../../../actions/book';
import BookWrapper from '../../layout/BookWrapper';
import { Button } from '../../layout/Button';

const Book = ({ item, addBook }) => {
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
  console.log(item);

  return (
    <BookWrapper className='book-item'>
      <img src={imgUrl} alt={title} />
      <div className='book-details'>
        <div className='top'>
          <h6>{title}</h6>
          <p>by {authors.join(', ')}</p>
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

export default connect(mapStateToProps, { addBook })(Book);
