import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setRem } from '../../layout/styles';
import { getBook } from '../../../actions/book';
import { getCurrentUserBookLists } from '../../../actions/bookList';

const SingleBook = ({ match, bookList, book }) => {
  const { book_id, list_name } = match.params;
  const { currentUserLists } = bookList;

  const list = currentUserLists.find((list) => list.name === list_name);

  const bookItem = list.books.find((book) => book._id === book_id);
  console.log(bookItem);

  const { authors, description, imgUrl, title } = bookItem.book;

  return (
    <BookPageWrapper>
      <h2>{title}</h2>
      <h3>by {authors.join(', ')}</h3>
      <img src={imgUrl} />
      <p>{description}</p>
      <small>on your {list.name} list</small>
    </BookPageWrapper>
  );
};

const BookPageWrapper = styled.section`
  width: 90vw;
  max-width: ${setRem(1100)};
  margin: 0 auto;
`;

const mapStateToProps = (state) => ({
  bookList: state.bookList,
  book: state.book,
});

export default connect(mapStateToProps, { getCurrentUserBookLists })(
  SingleBook
);
