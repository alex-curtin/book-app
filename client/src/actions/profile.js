import axios from 'axios';
import {
  GET_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  CREATE_PROFILE,
} from './types';
import { BASE_URL } from './constants';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/profiles/me`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { e },
    });
  }
};

export const createProfile = (formData) => async (dispatch) => {
  debugger;
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`${BASE_URL}/api/profiles/`, formData, config);

    dispatch({
      type: CREATE_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { e },
    });
  }
};

export const deleteBook = (bookId) => async (dispatch) => {
  debugger;
  try {
    const res = await axios.delete(`${BASE_URL}/api/profiles/books/${bookId}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { e },
    });
  }
};
