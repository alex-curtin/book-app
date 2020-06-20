import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import BookItem from './BookItem';

const SearchBooks = ({ book: { books, loading } }) => {
  return (
    <>
      <SearchBar />
      <div className='books'>
        {books.length > 0 &&
          books.map((book) => <BookItem key={book.id} book={book} />)}
      </div>
    </>
  );
};

SearchBooks.propTypes = {
  book: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps)(SearchBooks);
