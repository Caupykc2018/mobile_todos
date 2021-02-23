import { combineReducers } from 'redux';
import todos from './todos';
import currentUser from './currentUser';
import currentTab from './currentTab';
import error from './error';
import notification from './notification';
import filters from './filters';
import sorts from './sorts';

export default combineReducers({
  todos,
  currentUser,
  currentTab,
  error,
  notification,
  filters,
  sorts,
});
