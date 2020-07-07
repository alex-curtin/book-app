import { GET_BOOKLISTS, UPDATE_BOOKLIST } from '../actions/types';

const initialState = {
  currentUserLists: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKLISTS:
      return {
        ...state,
        currentUserLists: payload,
        loading: false,
      };
    case UPDATE_BOOKLIST:
      return {
        ...state,
        currentUserLists: state.currentUserLists.map((list) =>
          list.name === payload.name ? payload : list
        ),
      };
    default:
      return state;
  }
}
