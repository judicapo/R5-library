import { Action } from 'redux';
import { APP_ACTIONS } from './types';

// Action Creator
interface StartLoading extends Action {
  type: APP_ACTIONS.APP_LOADING_START;
  data: undefined;
}

interface EndLoading extends Action {
  type: APP_ACTIONS.APP_LOADING_END;
  data: undefined;
}

export type AppAction = StartLoading | EndLoading;
