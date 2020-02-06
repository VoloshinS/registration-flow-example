import { all } from 'redux-saga/effects';

import { userSaga } from '../modules/core/redux';

export default function* rootSaga() {
  yield all([userSaga()]);
}
