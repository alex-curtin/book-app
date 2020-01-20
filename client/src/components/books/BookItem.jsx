import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BookItem = ({
  book: {
    id,
    volumeInfo: {
      title,
      authors,
      imageLinks: {
        thumbnail
      }
    }
  },
  auth: {
    isAuthenticated
  }
}) => {
  return (
    <div className="book-item">
      <img src={thumbnail} alt={title} />

      <div className="book-details">
        <strong>{title}</strong>
        {authors.map(author => <p key={author}>{author}</p>)}
        {isAuthenticated && (
          <div className="mt-1">
            Add to list:
          <button className="btn">Read</button>
            <button className="btn">To-Read</button>
          </div>
        )}
      </div>
    </div>
  )
}

BookItem.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(BookItem);
