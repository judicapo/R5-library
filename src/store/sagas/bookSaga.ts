import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import { BOOK_ACTIONS } from '../redux/book/types';
import { APP_ACTIONS } from '@store/redux/app/types';
import { BookAction } from '@store/redux/book/actions';
import { fetchApi } from '@providers/apiProvider';

function* fetchBooks({ data }: BookAction) {
  try {
    yield put({ type: APP_ACTIONS.APP_LOADING_START });

    const response = yield call(fetchApi, data);
    const books = yield response.json();
    yield put({
      type: BOOK_ACTIONS.BOOK_GET_SUCCESS,
      data: books.items,
    });

    yield put({ type: APP_ACTIONS.APP_LOADING_END });
  } catch (e) {
    console.error(e);
    yield put({ type: BOOK_ACTIONS.BOOK_FAILURE, data: e });
    yield put({ type: APP_ACTIONS.APP_LOADING_END });
  }
}

function* watchBooks() {
  yield takeLatest(BOOK_ACTIONS.BOOK_GET_REQUEST, fetchBooks);
}

export default function* bookSaga() {
  yield all([
    fork(watchBooks),
  ]);
}
