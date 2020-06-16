import { Action } from 'redux';
import { BOOK_ACTIONS, Book } from './types';
import { FetchApiParams } from '@providers/apiProvider';

// Action Creator
interface BookGetRequestAction extends Action {
  type: BOOK_ACTIONS.BOOK_GET_REQUEST;
  data: FetchApiParams;
}

interface BookGetSuccessAction extends Action {
  type: BOOK_ACTIONS.BOOK_GET_SUCCESS;
  data: Book[];
}

interface BookFailureAction extends Action {
  type: BOOK_ACTIONS.BOOK_FAILURE;
  data: any;
}

export type BookAction = BookGetRequestAction | BookGetSuccessAction
  | BookFailureAction;
