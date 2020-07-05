import { combineReducers } from 'redux';
import auth from './auth';
import book from './book';
import profile from './profile';
import alert from './alert';
import bookList from './bookList';

export default combineReducers({
  auth,
  book,
  profile,
  alert,
  bookList,
});
