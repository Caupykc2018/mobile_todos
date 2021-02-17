import { setToken } from '../services/api/http/configuredFetch';

const initialState = {
  todos: [],
  currentUser: {},
  currentTab: {},
  error: {},
  notification: {},
  filters: {
    start: '',
    disableStart: false,
    end: '',
    disableEnd: false,
  },
};

if (initialState.currentUser.token) {
  setToken(initialState.currentUser.token);
}

export default initialState;