import { SET_LOADING_TODOS } from '../constants';

const loadingTodos = (state = false, { type, payload }) => {
  switch (type) {
    case SET_LOADING_TODOS:
      return payload.flag;
    default:
      return state;
  }
};

export default loadingTodos;
