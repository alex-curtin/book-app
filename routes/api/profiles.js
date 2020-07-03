const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Book = require('../../models/Book');
// const Post = require('../../models/Post');

// @route    GET api/profiles/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })
      .populate('user', ['name'])
      .populate('books.book');

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/', auth, async (req, res) => {
  const { location, bio, facebook, twitter, instagram } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;

  // Build social object
  profileFields.social = {};
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (instagram) profileFields.social.instagram = instagram;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    // Create
    profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    await Post.deleteMany({ user: req.user.id });

    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/profile/books
// @desc     Add book to list or update status
// @access   Private
router.put('/books', auth, async (req, res) => {
  const { book, status, favorite } = req.body;

  const newBook = {
    book,
    status,
    favorite,
  };

  try {
    const profile = await Profile.findOne({ user: req.user.id });

    //check if book is already on list
    const replaceIndex = profile.books
      .map((el) => el.book.toString())
      .indexOf(book);

    if (replaceIndex >= 0) {
      profile.books[replaceIndex] = newBook;
    } else {
      profile.books.push(newBook);
    }

    await profile.save();

    const updatedProfile = await Profile.findOne({ user: req.user.id })
      .populate('user', ['name'])
      .populate('books.book');

    res.json(updatedProfile);
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/books/:book_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.books
      .map((item) => item.id)
      .indexOf(req.params.book_id);

    profile.books.splice(removeIndex, 1);

    await profile.save();

    const updatedProfile = await Profile.findOne({ user: req.user.id })
      .populate('user', ['name'])
      .populate('books.book');

    res.json(updatedProfile);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
