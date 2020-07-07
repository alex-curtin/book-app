const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const BookList = require('../../models/BookList');
const User = require('../../models/User');

// @route    GET api/book-lists/me
// @desc     Get current users book list
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const bookLists = await BookList.find({ user: req.user.id })
      .populate('user', ['name'])
      .populate('books.book');
    console.log(bookLists);
    // if (!bookLists.length) {
    //   return res.status(400).json({ msg: 'This user has no book lists' });
    // }
    res.json(bookLists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/book-lists
// @desc     Create or update user book list
// @access   Private
router.post('/', auth, async (req, res) => {
  console.log(req.body);
  const { book, listName } = req.body;
  const fields = {
    user: req.user.id,
    name: listName,
  };

  try {
    let bookList = await BookList.findOne({
      user: req.user.id,
      name: listName,
    });

    if (bookList) {
      // Update
      console.log(book);
      //check if book is already on list
      const replaceIndex = bookList.books
        .map((el) => el.book.toString())
        .indexOf(book.book);

      if (replaceIndex >= 0) {
        bookList.books[replaceIndex] = book;
      } else {
        bookList.books.push(book);
      }
      await bookList.save();

      const updatedBookList = await BookList.findOne({
        user: req.user.id,
        name: listName,
      })
        .populate('user', ['name'])
        .populate('books.book');

      return res.json(updatedBookList);
    }

    // Create
    bookList = new BookList(fields)
      .populate('user', ['name'])
      .populate('books.book');

    bookList.books.push(book);

    await bookList.save();
    res.json(bookList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/:book_id', auth, async (req, res) => {
  try {
    const bookList = await BookList.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = bookList.books
      .map((item) => item._id)
      .indexOf(req.params.book_id);

    bookList.books.splice(removeIndex, 1);

    await bookList.save();

    const updatedBookList = await BookList.findOne({ user: req.user.id })
      .populate('user', ['name'])
      .populate('books.book');

    res.json(updatedBookList);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
