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
    search: '',
  },
  sorts: {
    sortCreatedAt: '',
  },
  isAllTodos: false,
  loadingTodos: false,
};

if (initialState.currentUser.token) {
  setToken(initialState.currentUser.token);
}

export default initialState;
