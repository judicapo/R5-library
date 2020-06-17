import { createStore, Store, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootReducer from './redux';
import rootSaga from './sagas';
import { AppState } from './redux/app/types';
import { BookState } from './redux/book/types';
import { ReviewState } from './redux/review/types';

export interface GlobalState {
  appReducer: AppState;
  bookReducer: BookState;
  reviewReducer: ReviewState;
}

export interface SagaStore extends Store {
  sagaTask?: Task;
}

function bindMiddleware(middleware: any) {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

export const configureStore = (initialState?: GlobalState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = compose(bindMiddleware(middlewares));
  const store: SagaStore = createStore(rootReducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
