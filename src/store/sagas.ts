import { all } from 'redux-saga/effects';

import authSaga from '../modules/core/redux/auth.saga';
import userSaga from '../modules/core/redux/user.saga';

export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
