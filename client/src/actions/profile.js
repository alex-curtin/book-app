import axios from 'axios';
import {
  GET_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/profiles/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })

  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { e }
    })
  }
}