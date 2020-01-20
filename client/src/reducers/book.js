import {
  GET_BOOKS,
  BOOK_ERROR,
  ADD_BOOK
} from '../actions/types';

const initialState = {
  books: [],
  loading: true,
  error: []
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        books: payload,
        loading: false
      }
    case ADD_BOOK:
      return {
        ...state
      }
    case BOOK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
  }
}