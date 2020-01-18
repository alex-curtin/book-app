const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: [
    {
      type: String,
    }
  ],
  imgUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  googleId: {
    type: String,
    required: true
  }
});

module.exports = Book = mongoose.model('book', BookSchema);