import { APP_ACTIONS, AppState } from './types';
import { AppAction } from './actions';

const initialState = { appLoading: false };

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case APP_ACTIONS.APP_LOADING_START:
      return { ...state, appLoading: true };
    case APP_ACTIONS.APP_LOADING_END:
      return { ...state, appLoading: false };
    default:
      return { ...state };
  }
};

export default appReducer;
