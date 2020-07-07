import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_BOOKS,
  GET_BOOKLISTS,
  BOOKLIST_ERROR,
  UPDATE_BOOKLIST,
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
    console.log(res.data);
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
