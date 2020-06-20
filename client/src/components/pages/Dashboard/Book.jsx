import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = ({
  book: {
    title,
    authors,
    imgUrl,
  }
}) => {
  return (
    <div className="book-item">
      <img src={imgUrl} alt={title} />

      <div className="book-details">
        <strong>{title}</strong>
        {authors.map(author => <p key={author}>{author}</p>)}
      </div>
    </div>
  )
}

Book.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Book);
