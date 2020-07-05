import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_BOOKS,
  GET_BOOKLIST,
  BOOKLIST_ERROR,
  UPDATE_BOOKLIST,
} from './types';
import { BASE_URL } from './constants';

export const getCurrentBookList = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/book-lists/me`);

    dispatch({
      type: GET_BOOKLIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: BOOKLIST_ERROR,
      payload: { e },
    });
  }
};

export const deleteBook = (bookId) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/book-lists/${bookId}`);

    dispatch({
      type: UPDATE_BOOKLIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: BOOKLIST_ERROR,
      payload: { e },
    });
  }
};
