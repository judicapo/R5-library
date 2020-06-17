// Action Types
export enum REVIEW_ACTIONS {
  REVIEW_SAVE = 'REVIEW_SAVE',
  REVIEW_GET_ALL = 'REVIEW_GET_ALL',
  REVIEW_FAILURE = 'REVIEW_FAILURE',
}

export interface Review {
  bookInfoLink: string;
  username: string;
  review: string;
}

export interface ReviewState {
  storedReviews: Review[] | any;
  error: any;
}
