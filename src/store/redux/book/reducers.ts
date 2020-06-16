import { BOOK_ACTIONS, BookState } from './types';
import { BookAction } from './actions';

const initialState = {
  queriedBooks: [],
  error: undefined,
};

const bookReducer = (state = initialState, action: BookAction): BookState => {
  switch (action.type) {
    case BOOK_ACTIONS.BOOK_GET_REQUEST:
      return { ...state };
    case BOOK_ACTIONS.BOOK_GET_SUCCESS:
      return { ...state, queriedBooks: [...action.data] };
    case BOOK_ACTIONS.BOOK_FAILURE:
      return { ...state, error: action.data };
    default:
      return { ...state };
  }
};

export default bookReducer;
