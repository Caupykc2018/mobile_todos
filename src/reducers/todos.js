import {
  ADD_TODO_BEGIN,
  ADD_TODO_END,
  CLEAR_TODOS,
  INITIAL_TODOS,
  REMOVE_TODO,
  REMOVE_TODOS,
  SET_TODO,
  SET_TODOS,
  ADD_TODOS,
} from '../constants';

const todos = (state = [], { type, payload }) => {
  let copyState = [...state];

  switch (type) {
    case INITIAL_TODOS:
      return payload.todos;
    case CLEAR_TODOS:
      return [];
    case ADD_TODO_BEGIN:
      return [payload.todo, ...state];
    case ADD_TODO_END:
      return [...state, payload.todo];
    case ADD_TODOS:
      return [...state, ...payload.todos];
    case SET_TODO:
      copyState[copyState.findIndex((todo) => todo.id === payload.todo.id)] =
        payload.todo;

      return copyState;
    case SET_TODOS:
      payload.todos.forEach((payloadTodo) => {
        const index = copyState.findIndex((todo) => todo.id === payloadTodo.id);

        copyState[index] = payloadTodo;
      });
      return copyState;
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload.todo.id);
    case REMOVE_TODOS:
      payload.todos.forEach((todo) => {
        copyState = copyState.filter(({ id }) => id !== todo.id);
      });
      return copyState;
    default:
      return state;
  }
};

export default todos;
