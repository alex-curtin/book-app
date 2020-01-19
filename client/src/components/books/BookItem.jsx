import React from 'react'

const BookItem = ({ book: {
  id,
  volumeInfo: {
    title,
    authors,
    imageLinks: {
      thumbnail
    }
  }
} }) => {
  return (
    <div className="book-item">
      <img src={thumbnail} alt={title} />

      <p>{title}</p>

      {authors.map(author => <p key={author}>{author}</p>)}
    </div>
  )
}

export default BookItem;
