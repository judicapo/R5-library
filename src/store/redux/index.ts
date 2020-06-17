import { combineReducers } from 'redux';
import appReducer from './app/reducers';
import bookReducer from './book/reducers';
import reviewReducer from './review/reducers';

const rootReducer = combineReducers({
  appReducer,
  bookReducer,
  reviewReducer,
});

export default rootReducer;
