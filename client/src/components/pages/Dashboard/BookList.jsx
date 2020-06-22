import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import styled from 'styled-components';
import { setRem, setFlex } from '../../layout/styles';
import { selectList } from '../../../selectors/profile';

const BookList = ({ title, bookList }) => {
  return (
    <div>
      <h4>{title}</h4>
      <ListWrapper>
        {bookList
          .filter((book) => book.status === title)
          .map((book) => (
            <Book key={book._id} item={book} />
          ))}
      </ListWrapper>
    </div>
  );
};

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${setRem()};
`;

const mapStateToProps = (state) => ({
  bookList: selectList(state),
});

export default connect(mapStateToProps)(BookList);
