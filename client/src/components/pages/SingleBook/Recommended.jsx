import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../../actions/book';
import RecommendedItem from './RecommendedItem';

const Recomended = ({ getBooks, author, book, googleId }) => {
  useEffect(() => {
    getBooks(author);
  }, []);

  return (
    <div>
      <h4>More By This Author</h4>
      {book.books.slice(0, 10).map((book) => {
        return book.volumeInfo.imageLinks && book.id !== googleId ? (
          <RecommendedItem book={book} key={book.id} />
        ) : null;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps, { getBooks })(Recomended);
