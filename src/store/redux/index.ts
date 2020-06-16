import { combineReducers } from 'redux';
import appReducer from './app/reducers';
import bookReducer from './book/reducers';

const rootReducer = combineReducers({
  appReducer,
  bookReducer,
});

export default rootReducer;
