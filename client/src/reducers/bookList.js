import { GET_BOOKLIST, UPDATE_BOOKLIST } from '../actions/types';

const initialState = {
  currentList: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKLIST:
    case UPDATE_BOOKLIST:
      return {
        ...state,
        currentList: payload,
        loading: false,
      };
    default:
      return state;
  }
}
