import axios from 'axios';
import {
  GET_BOOKS,
  BOOK_ERROR,
  ADD_BOOK,
  UPDATE_PROFILE
} from './types';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const extAxios = axios.create();
extAxios.defaults.headers.common = {};

// Get books from Google Books API
export const getBooks = (query) => async dispatch => {
  try {
    const res = await extAxios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`);

    dispatch({
      type: GET_BOOKS,
      payload: res.data.items
    })

  } catch (e) {
    dispatch({
      type: BOOK_ERROR,
      payload: { e }
    })
  }
};

// Add a book
export const addBook = (bookData, status) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    // Add book to books document
    const res = await axios.post('http://localhost:5000/api/books', bookData, config);

    dispatch({
      type: ADD_BOOK,
      payload: res.data
    })

    const book = {
      book: res.data._id,
      status
    }

    // Add book to user profile books list
    const resp = await axios.put('http://localhost:5000/api/profiles/books', book, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: resp.data
    });

  } catch (e) {
    dispatch({
      type: BOOK_ERROR,
      payload: { e }
    })
  }
}