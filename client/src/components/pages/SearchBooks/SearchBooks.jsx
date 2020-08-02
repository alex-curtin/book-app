import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import BookItem from './BookItem';
import Container from '../../layout/Container';
import { setRem, setColor } from '../../layout/styles';
import {
  getBooks,
  getMoreBooks,
  setCurrentQuery,
  clearBooks,
} from '../../../actions/book';
import { getCurrentUserBookLists } from '../../../actions/bookList';

const SearchBooks = ({
  book: { books, currentQuery, loading },
  getBooks,
  getMoreBooks,
  setCurrentQuery,
  getCurrentUserBookLists,
  clearBooks,
}) => {
  useEffect(() => {
    getCurrentUserBookLists();
    return () => clearBooks();
  }, [clearBooks, getCurrentUserBookLists]);

  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);

  const loadBooks = (e) => {
    e.preventDefault();
    setCurrentQuery(query);
    getBooks(query);
    setIndex(0);
    setQuery('');
  };

  const loadMoreBooks = async (e) => {
    e.preventDefault();
    getMoreBooks(currentQuery, index + 20);
    setIndex(index + 20);
  };

  return (
    <SearchBooksWrapper>
      <Container>
        <h2>Search for books</h2>
        <SearchBar handleSubmit={loadBooks} setQuery={setQuery} query={query} />
        <div className='books'>
          {books.length > 0 &&
            books.map((book) => <BookItem key={book.etag} book={book} />)}
        </div>
        {books.length > 0 && (
          <p className='load-more'>
            <span onClick={loadMoreBooks}>load more results</span>
          </p>
        )}
      </Container>
    </SearchBooksWrapper>
  );
};

const SearchBooksWrapper = styled.section`
  .books {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: ${setRem(25)};
    grid-row-gap: ${setRem(10)};
  }

  .load-more {
    color: ${setColor.secondaryDark};
    text-align: center;
    margin: ${setRem()} 0;
    span {
      cursor: pointer;
    }
  }
`;

SearchBooks.propTypes = {
  book: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired,
  getMoreBooks: PropTypes.func.isRequired,
  setCurrentQuery: PropTypes.func.isRequired,
  getCurrentUserBookLists: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps, {
  getBooks,
  getMoreBooks,
  setCurrentQuery,
  getCurrentUserBookLists,
  clearBooks,
})(SearchBooks);
