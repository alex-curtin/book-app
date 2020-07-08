import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_BOOKS,
  GET_BOOKLISTS,
  BOOKLIST_ERROR,
  UPDATE_BOOKLIST,
  DELETE_BOOKLIST,
} from './types';
import { BASE_URL } from './constants';

export const getCurrentUserBookLists = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/book-lists/me`);

    dispatch({
      type: GET_BOOKLISTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: BOOKLIST_ERROR,
      payload: { e },
    });
  }
};

export const deleteBook = (bookId, listName) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${BASE_URL}/api/book-lists/${listName}/${bookId}`
    );

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

export const deleteBookList = (listName) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/api/book-lists/${listName}`);

    dispatch({
      type: DELETE_BOOKLIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: BOOKLIST_ERROR,
      payload: { e },
    });
  }
};
