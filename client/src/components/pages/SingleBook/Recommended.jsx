import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBooks } from '../../../actions/book';
import RecommendedItem from './RecommendedItem';

const Recomended = ({ getBooks, author, book, googleId }) => {
  useEffect(() => {
    getBooks(author);
  }, [author]);

  const recommendedBooks = book.books
    .filter((book) => book.id !== googleId && book.volumeInfo.imageLinks)
    .slice(0, 10);

  return (
    <div>
      <h4>More By This Author</h4>
      {recommendedBooks.map((book) => (
        <RecommendedItem book={book} key={book.id} />
      ))}
    </div>
  );
};

RecommendedItem.propTypes = {
  getBooks: PropTypes.func,
  author: PropTypes.string,
  book: PropTypes.object.isRequired,
  googleId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps, { getBooks })(Recomended);
