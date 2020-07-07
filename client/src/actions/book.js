import axios from 'axios';
import { setAlert } from './alert';
import {
  SET_QUERY,
  GET_BOOKS,
  GET_MORE_BOOKS,
  BOOK_ERROR,
  ADD_BOOK,
  UPDATE_PROFILE,
  UPDATE_BOOKLIST,
} from './types';
import { BASE_URL } from './constants';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const extAxios = axios.create();
extAxios.defaults.headers.common = {};

// Set current query
export const setCurrentQuery = (query) => (dispatch) => {
  dispatch({
    type: SET_QUERY,
    payload: query,
  });
};

// Get books from Google Books API
export const getBooks = (query) => async (dispatch) => {
  try {
    const res = await extAxios.get(
      `https://www.googleapis.com/books/v1/volumes?orderBy=relevance&maxResults=20&q=${query}&startIndex=0`
    );
    console.log(res.data);
    dispatch({
      type: GET_BOOKS,
      payload: res.data.items,
    });
  } catch (e) {
    dispatch({
      type: BOOK_ERROR,
      payload: { e },
    });
  }
};

export const getMoreBooks = (query, index) => async (dispatch) => {
  try {
    const res = await extAxios.get(
      `https://www.googleapis.com/books/v1/volumes?orderBy=relevance&maxResults=20&q=${query}&startIndex=${index}`
    );

    dispatch({
      type: GET_MORE_BOOKS,
      payload: res.data.items,
    });
  } catch (e) {
    dispatch({
      type: BOOK_ERROR,
      payload: { e },
    });
  }
};

// Add a book
export const addBook = (bookData, listName) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // Add book to database
    const res = await axios.post(`${BASE_URL}/api/books`, bookData, config);

    dispatch({
      type: ADD_BOOK,
      payload: res.data,
    });

    const book = {
      book: res.data._id,
    };

    // Add book to user book list
    const resp = await axios.post(
      `${BASE_URL}/api/book-lists`,
      { book, listName },
      config
    );

    dispatch({
      type: UPDATE_BOOKLIST,
      payload: resp.data,
    });

    dispatch(setAlert('Book Added to Your List', 'success'));
  } catch (e) {
    dispatch({
      type: BOOK_ERROR,
      payload: { e },
    });
  }
};
