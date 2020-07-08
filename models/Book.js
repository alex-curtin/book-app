const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  authors: [
    {
      type: String,
    },
  ],
  imgUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  publisher: {
    type: String,
  },
  publishedDate: {
    type: String,
  },
  category: {
    type: String,
  },
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = Book = mongoose.model('book', BookSchema);
