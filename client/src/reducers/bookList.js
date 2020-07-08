import {
  GET_BOOKLISTS,
  UPDATE_BOOKLIST,
  DELETE_BOOKLIST,
} from '../actions/types';

const initialState = {
  currentUserLists: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKLISTS:
    case UPDATE_BOOKLIST:
      return {
        ...state,
        currentUserLists: payload,
        loading: false,
      };
    case DELETE_BOOKLIST:
      return {
        ...state,
        currentUserLists: state.currentUserLists.filter(
          (list) => list.name !== payload
        ),
        loading: false,
      };
    default:
      return state;
  }
}
