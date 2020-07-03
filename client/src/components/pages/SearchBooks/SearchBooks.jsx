import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getCurrentProfile } from '../../../actions/profile';
import SearchBar from './SearchBar';
import BookItem from './BookItem';
import { setRem, setColor, setFlex } from '../../layout/styles';

const SearchBooks = ({ book: { books, loading }, getCurrentProfile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <SearchBooksWrapper>
      <h2 className='text-center'>Search for books</h2>
      <SearchBar />
      <div className='books'>
        {books.length > 0 &&
          books.map((book) => <BookItem key={book.id} book={book} />)}
      </div>
    </SearchBooksWrapper>
  );
};

SearchBooks.propTypes = {
  book: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  book: state.book,
});

const SearchBooksWrapper = styled.section`
  min-height: 100vh;
  width: 90vw;
  max-width: ${setRem(1200)};
  margin: 0 auto;
  padding-top: ${setRem()};
  .books {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-column-gap: ${setRem(25)};
    grid-row-gap: ${setRem(10)};
  }
`;

export default connect(mapStateToProps, { getCurrentProfile })(SearchBooks);
