import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setRem, setFlex } from '../../layout/styles';
import BookListItem from './BookListItem';

const BookList = ({ list }) => {
  console.log(list);
  return (
    <ListWrapper>
      <h4>{list.name}</h4>
      {list.books.map(({ book }) => (
        <BookListItem book={book} key={book._id} listName={list.name} />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  margin-bottom: ${setRem()};
  h4 {
    text-transform: capitalize;
  }
`;

const mapStateToProps = (state) => ({
  bookList: state.bookList,
});

export default connect(mapStateToProps)(BookList);
