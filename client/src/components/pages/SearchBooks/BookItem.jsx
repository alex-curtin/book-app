import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addBook } from '../../../actions/book';
import { Button } from '../../layout/Button.js';
import BookWrapper from '../../layout/BookWrapper';

import {
  setRem,
  setFlex,
  setBorder,
  setColor,
  setBackground,
} from '../../layout/styles';

// TODO - deal with google books that have no images

const BookItem = ({
  book,
  auth: { isAuthenticated },
  profile: { profile },
  addBook,
}) => {
  const {
    id,
    volumeInfo: {
      title,
      authors,
      description = 'no description available',
      imageLinks: { thumbnail = '' },
    },
  } = book;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = {
      title,
      authors,
      description,
      imgUrl: thumbnail,
      googleId: id,
    };
    addBook(bookData, e.target.value);
  };

  return (
    <BookWrapper className='book-item'>
      <img src={thumbnail} alt={title} />

      <div className='book-details'>
        <div className='top'>
          <h6>{title}</h6>
          <p>by {authors.join(',')}</p>
        </div>

        <small>{`${description.slice(0, 170).trim()}...`}</small>

        {isAuthenticated &&
          (profile !== null ? (
            <div className='bottom'>
              Add to list:
              <Button
                className='btn'
                value='read'
                onClick={(e) => handleSubmit(e)}
              >
                Read
              </Button>
              <Button
                className='btn'
                value='to-read'
                onClick={(e) => handleSubmit(e)}
              >
                To-Read
              </Button>
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
});

const aBookWrapper = styled.article`
  ${setFlex({ y: 'flex-start', x: 'flex-start' })};
  height: 100%;
  .book-details {
    background: ${setColor.mainGrey};
    ${setFlex({ x: 'space-between', y: 'flex-start' })};
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .top,
  .bottom {
    padding: ${setRem(10)};
    width: 100%;
  }

  .bottom {
    text-align: right;
    justify-self: flex-end;
    background: ${setColor.primaryMuted};
  }

  small {
    padding: ${setRem(10)};
  }
`;

export default connect(mapStateToProps, { addBook })(BookItem);
