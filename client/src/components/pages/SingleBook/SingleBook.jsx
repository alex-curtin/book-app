import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setRem, setFlex, setColor, setBorder } from '../../layout/styles';
import { getBook } from '../../../actions/book';
import { getCurrentUserBookLists } from '../../../actions/bookList';
import Recommended from './Recommended';

const SingleBook = ({ match, bookList, book }) => {
  const { book_id, list_name } = match.params;
  const { currentUserLists } = bookList;

  const list = currentUserLists.find((list) => list.name === list_name);

  const bookItem = list.books.find((book) => book._id === book_id);
  console.log(bookItem);

  const {
    authors,
    description,
    imgUrl,
    title,
    subtitle,
    publisher,
    publishedDate,
    googleId,
  } = bookItem.book;

  return (
    <BookPageWrapper>
      <Link to='/dashboard'>back to lists</Link>
      <h2>
        {title}
        {subtitle && <span>: {subtitle}</span>}
      </h2>
      <h3>by {authors.join(', ')}</h3>

      <div className='content'>
        <div>
          <img src={imgUrl} />
          <small>on your {list.name} list</small>
        </div>

        <div className='info'>
          <p>
            {publisher}, {publishedDate}
          </p>
          <p>{description}</p>
        </div>
      </div>
      <Recommended author={authors[0]} googleId={googleId} />
    </BookPageWrapper>
  );
};

const BookPageWrapper = styled.section`
  padding-top: ${setRem()};
  width: 90vw;
  max-width: ${setRem(1100)};
  margin: 0 auto;
  h2 {
    margin-top: ${setRem(32)};
  }
  .content {
    display: flex;
    img {
      max-height: ${setRem(200)};
      display: block;
    }
  }
  .info {
    max-width: ${setRem(450)};
    margin-left: ${setRem()};
  }
  a {
    color: ${setColor.secondaryDark};
  }
`;

const mapStateToProps = (state) => ({
  bookList: state.bookList,
  book: state.book,
});

export default connect(mapStateToProps, { getCurrentUserBookLists })(
  SingleBook
);
