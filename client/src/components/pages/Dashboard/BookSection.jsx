import React from 'react';

const BookSection = ({ books }) => {
  const readBooks = () => books.filter((book) => book.status === 'read');

  const toReadBooks = () => books.filter((book) => book.status === 'to-read');

  return (
    <div>
      <h2>Your Book Lists</h2>
    </div>
  );
};

export default BookSection;
