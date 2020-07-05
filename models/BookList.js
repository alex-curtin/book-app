const mongoose = require('mongoose');

const BookListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  books: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book',
      },
      status: {
        type: String,
      },
      favorite: {
        type: Boolean,
      },
    },
  ],
});

module.exports = BookList = mongoose.model('booklist', BookListSchema);
