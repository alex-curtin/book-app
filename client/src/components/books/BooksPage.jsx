import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBooks from './SearchBooks';
import BookItem from './BookItem';

const BooksPage = ({ book: { books, loading } }) => {
  return (
    <>
      <SearchBooks />
      {books.length > 0 && (
        books.map(book =>
          <BookItem
            key={book.id}
            book={book}
          />)
      )}
    </>
  )
}

BooksPage.propTypes = {
  book: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  book: state.book
})

export default connect(mapStateToProps)(BooksPage);
