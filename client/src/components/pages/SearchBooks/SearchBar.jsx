import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setRem, setColor, setBorder } from '../../layout/styles';
import { getBooks } from '../../../actions/book';

const SearchBar = ({ query, handleSubmit, setQuery }) => {
  return (
    <SearchBarWrapper className='search-bar' onSubmit={(e) => handleSubmit(e)}>
      <input
        name='query'
        value={query}
        placeholder='Search...'
        onChange={(e) => setQuery(e.target.value)}
        required
      />

      <button>
        <i className='fas fa-search'></i>
      </button>
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  getBooks: PropTypes.func.isRequired,
};

const SearchBarWrapper = styled.form`
  margin-bottom: ${setRem(20)};
  input {
    padding: 5px;
    ${setBorder()};
    border-radius: ${setRem(5)} 0 0 ${setRem(5)};
  }
  button {
    padding: ${setRem(5)};
    ${setBorder()};
    border-radius: 0 ${setRem(5)} ${setRem(5)} 0;
    border-left: none;
  }
`;

export default connect(null, { getBooks })(SearchBar);
