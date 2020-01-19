import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooks } from '../../actions/book';

const SearchBooks = ({ getBooks }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks(query);
    setQuery('');
  }

  return (
    <>
      <h2>Search for books</h2>
      <form
        className="search-bar"
        onSubmit={e => handleSubmit(e)}
      >

        <input
          name="query"
          value={query}
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          required
        />

        <button>
          <i className="fas fa-search"></i>
        </button>

      </form>
    </>
  )
}

SearchBooks.propTypes = {
  getBooks: PropTypes.func.isRequired
}

export default connect(null, { getBooks })(SearchBooks);
