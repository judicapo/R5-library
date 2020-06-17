import { REVIEW_ACTIONS, ReviewState } from './types';
import { ReviewAction } from './actions';

const initialState = {
  storedReviews: [],
  error: undefined,
};

const reviewReducer = (state = initialState, action: ReviewAction): ReviewState => {
  switch (action.type) {
    case REVIEW_ACTIONS.REVIEW_GET_ALL:
      return { ...state };
    case REVIEW_ACTIONS.REVIEW_SAVE:
      return {
        ...state, storedReviews: [
          ...state.storedReviews,
          action.data,
        ],
      };
    case REVIEW_ACTIONS.REVIEW_FAILURE:
      return { ...state, error: action.data };
    default:
      return { ...state };
  }
};

export default reviewReducer;
