import { takeEvery, call, put, select } from 'redux-saga/effects';
import { fetchGetAllTodos } from '../services/api/http/fetchGetAllTodos';
import {
  ADD_TODOS,
  ERROR,
  GET_ALL_TODOS,
  REFRESH_TOKEN,
  SET_ERROR,
  SET_NOTIFICATION,
  MAX_PAGE_SIZE_TODOS,
  SET_IS_ALL_TODOS,
  SET_LOADING_TODOS,
} from '../constants';

const workerGetAllTodos = function* () {
  try {
    yield put({ type: SET_LOADING_TODOS, payload: { flag: true } });
    const todos = yield select((state) => state.todos);

    const { disableStart, disableEnd, start, end, search } = yield select(
      (state) => state.filters,
    );

    const { sortCreatedAt } = yield select((state) => state.sorts);

    const startDate = disableStart || start === '' ? null : start;
    const endDate = disableEnd || end === '' ? null : end;

    const data = yield call(fetchGetAllTodos, {
      startDate,
      endDate,
      search,
      sortCreatedAt,
      countTodos: todos.length,
    });

    if (MAX_PAGE_SIZE_TODOS !== data.length) {
      yield put({ type: SET_IS_ALL_TODOS, payload: { flag: true } });
    }

    yield put({ type: ADD_TODOS, payload: { todos: data } });
    yield put({ type: SET_LOADING_TODOS, payload: { flag: false } });
  } catch (e) {
    if (e.status === 401) {
      yield put({
        type: REFRESH_TOKEN,
        payload: { refetchType: GET_ALL_TODOS, refetchPayload: {} },
      });
    } else {
      yield put({ type: SET_ERROR, payload: { error: e } });
      yield put({
        type: SET_NOTIFICATION,
        payload: { notification: { message: e.message, type: ERROR } },
      });
    }
    yield put({ type: SET_LOADING_TODOS, payload: { flag: false } });
  }
};

export const watchGetAllTodos = function* () {
  yield takeEvery(GET_ALL_TODOS, workerGetAllTodos);
};
