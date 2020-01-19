import axios from 'axios';
import {
  GET_BOOKS,
  BOOK_ERROR
} from './types';

// Get books from Google Books API
export const getBooks = (query) => async dispatch => {
  try {
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

    dispatch({
      type: GET_BOOKS,
      payload: res.data.items
    })

  } catch (e) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status }
    })
  }
}