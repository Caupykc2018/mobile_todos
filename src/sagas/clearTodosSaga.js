import { put, takeEvery } from 'redux-saga/effects';
import { CLEAR_TODOS, SET_IS_ALL_TODOS, CLEAR_ALL_TODOS } from '../constants';

const workerClearTodos = function* () {
  yield put({ type: SET_IS_ALL_TODOS, payload: { flag: false } });
  yield put({ type: CLEAR_TODOS });
};

export const watchClearTodos = function* () {
  yield takeEvery(CLEAR_ALL_TODOS, workerClearTodos);
};
