const mongoose = require('mongoose');

const BookListSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile'
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  },
  status: {
    type: String
  },
  favorite: {
    type: Boolean
  }
})

module.exports = BookList = mongoose.model('book-list', BookListSchema);