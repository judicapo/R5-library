// Action Types
export enum APP_ACTIONS {
  APP_LOADING_START = 'APP_LOADING_START',
  APP_LOADING_END = 'APP_LOADING_END',
}

export interface AppState {
  appLoading: boolean;
}
