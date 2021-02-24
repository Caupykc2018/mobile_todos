import { all } from 'redux-saga/effects';
import { watchAddTodo } from './addTodoSaga';
import { watchClearTodos } from './clearTodosSaga';
import { watchLogin } from './loginSaga';
import { watchRegister } from './registerSaga';
import { watchLogOut } from './logOutSaga';
import { watchRefreshToken } from './refreshTokenSaga';
import { watchGetAllTodos } from './getAllTodosSaga';
import { watchCreateTodo } from './createTodoSaga';
import { watchDeleteTodo } from './deleteTodoSaga';
import { watchToggleStatusTodo } from './toggleStatusTodoSaga';
import { watchEditTitleTodo } from './editTitleTodoSaga';
import { watchToggleStatusAllTodos } from './toggleStatusAllTodosSaga';
import { watchSetUserTab } from './setUserTabSaga';
import { watchClearCompletedTodos } from './clearCompletedTodosSaga';
import { watchSocket } from './socketSaga';
import { watchUpdateManyTodos } from './updateManyTodosSaga';
import { watchDeleteManyTodos } from './deleteManyTodosSaga';

export default function* rootSaga() {
  yield all([
    watchAddTodo(),
    watchClearTodos(),
    watchLogin(),
    watchRegister(),
    watchLogOut(),
    watchRefreshToken(),
    watchGetAllTodos(),
    watchCreateTodo(),
    watchDeleteTodo(),
    watchToggleStatusTodo(),
    watchEditTitleTodo(),
    watchToggleStatusAllTodos(),
    watchSetUserTab(),
    watchClearCompletedTodos(),
    watchSocket(),
    watchUpdateManyTodos(),
    watchDeleteManyTodos(),
  ]);
}
