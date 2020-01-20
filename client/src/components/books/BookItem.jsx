import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../actions/book';

// TODO - deal with google books that have no images

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
  profile: { profile },
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
          profile !== null ?
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
            </div> :
            <p className="mt-1">create a profile to add books to your lists</p>
        )}
      </div>
    </div>
  )
}

BookItem.propTypes = {
  auth: PropTypes.object.isRequired,
  addBook: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { addBook })(BookItem);
