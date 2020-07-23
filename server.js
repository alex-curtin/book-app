const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

const app = express();

// connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(logger('dev'));
app.use(cors());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/books', require('./routes/api/books'));
app.use('/api/book-lists', require('./routes/api/bookLists'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
