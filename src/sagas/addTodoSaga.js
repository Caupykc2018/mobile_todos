import { select, takeEvery, put } from 'redux-saga/effects';
import { ADD_TODO, ADD_TODO_BEGIN, ADD_TODO_END, DESC } from '../constants';

const workerAddTodo = function* ({ payload }) {
  const { sortCreatedAt } = yield select((state) => state.sorts);
  const isAllTodos = yield select((state) => state.isAllTodos);

  if (sortCreatedAt === DESC) {
    yield put({ type: ADD_TODO_BEGIN, payload });
  } else {
    if (isAllTodos) {
      yield put({ type: ADD_TODO_END, payload });
    }
  }
};

export const watchAddTodo = function* () {
  yield takeEvery(ADD_TODO, workerAddTodo);
};
