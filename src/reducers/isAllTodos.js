import { SET_IS_ALL_TODOS } from '../constants';

const isAllTodos = (state = false, { type, payload }) => {
  switch (type) {
    case SET_IS_ALL_TODOS:
      return payload.flag;
    default:
      return state;
  }
};

export default isAllTodos;
