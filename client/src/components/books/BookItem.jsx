import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../actions/book';

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
  },
  addBook
}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = {
      title,
      authors,
      imgUrl: thumbnail,
      googleId: id
    }
    addBook(bookData, e.target.value);
  }

  return (
    <div className="book-item">
      <img src={thumbnail} alt={title} />

      <div className="book-details">
        <strong>{title}</strong>
        {authors.map(author => <p key={author}>{author}</p>)}

        {isAuthenticated && (
          <div className="mt-1">
            Add to list:
          <button
              className="btn"
              value="read"
              onClick={e => handleSubmit(e)}
            >Read
            </button>

            <button
              className="btn"
              value="to-read"
              onClick={e => handleSubmit(e)}
            >To-Read
            </button>

          </div>
        )}
      </div>
    </div>
  )
}

BookItem.propTypes = {
  auth: PropTypes.object.isRequired,
  addBook: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { addBook })(BookItem);
