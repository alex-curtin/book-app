import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import styled from 'styled-components';
import { setRem, setFlex } from '../../layout/styles';
import { selectList } from '../../../selectors/profile';
import book from '../../../reducers/book';

const BookList = ({ title, bookList }) => {
  const { books } = bookList.currentList;
  console.log(bookList);
  return (
    !bookList.loading && (
      <div>
        <h4>{title}</h4>
        <ListWrapper>
          {books
            .filter((book) => book.status === title)
            .map((book) => (
              <Book key={book._id} item={book} />
            ))}
        </ListWrapper>
      </div>
    )
  );
};

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${setRem()};
`;

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps)(BookList);
