import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootReducer from '../reducers';
import initialState from './initialState';
import rootSaga from '../sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const persistedReducer = persistReducer(
    {
      key: 'currentUser',
      storage: AsyncStorage,
      whitelist: ['currentUser'],
    },
    rootReducer,
  );

  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(logger), applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();

export const persistor = persistStore(store, {});
