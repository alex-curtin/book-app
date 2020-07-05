import {
  GET_BOOKS,
  BOOK_ERROR,
  ADD_BOOK,
  SET_QUERY,
  GET_MORE_BOOKS,
} from '../actions/types';

const initialState = {
  currentQuery: null,
  books: [],
  loading: true,
  error: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_QUERY:
      return {
        ...state,
        currentQuery: payload,
      };
    case GET_BOOKS:
      return {
        ...state,
        books: payload,
        loading: false,
      };
    case GET_MORE_BOOKS:
      return {
        ...state,
        books: [...state.books, ...payload],
        loading: false,
      };
    case ADD_BOOK:
      return {
        ...state,
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
