import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setRem, setBorder } from '../../layout/styles';

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

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
