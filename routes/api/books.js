const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Book = require('../../models/Book');

// @route    GET api/books
// @desc     Get all books
// @access   Public
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();

    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/books
// @desc     Add a book
// @access   Private
router.post(
  '/',
  [auth, check('title', 'Title is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let book = await Book.findOne({ googleId: req.body.googleId });

      if (book) {
        return res.json(book);
      }

      const newBook = new Book({
        title: req.body.title,
        authors: req.body.authors,
        imgUrl: req.body.imgUrl,
        googleId: req.body.googleId,
        description: req.body.description,
      });

      book = await newBook.save();

      res.json(book);
    } catch (e) {
      console.log(e.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
