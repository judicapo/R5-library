import { Action } from 'redux';
import { REVIEW_ACTIONS, Review } from './types';

// Action Creator
interface BookSaveAction extends Action {
  type: REVIEW_ACTIONS.REVIEW_SAVE;
  data: Review;
}

interface BookGetAllAction extends Action {
  type: REVIEW_ACTIONS.REVIEW_GET_ALL;
  data: undefined;
}

interface ReviewFailureAction extends Action {
  type: REVIEW_ACTIONS.REVIEW_FAILURE;
  data: any;
}

export type ReviewAction = BookSaveAction | BookGetAllAction
  | ReviewFailureAction;
