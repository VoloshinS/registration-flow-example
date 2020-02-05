import { call, takeEvery, all, put } from 'redux-saga/effects';

import { ADD_USER, User } from './types';
import { addUserSuccess, addUserFailure } from './actions';
import { saveUser } from '../api';

function* addUser(...attrs: any[]) {
  try {
    console.log(attrs);
    const data: User = yield call(saveUser, {username: '', password: 'sadf'});

    yield put(addUserSuccess(data));
  } catch (e) {
    yield put(addUserFailure(e.message));
  }
}

function* watchUsers() {
  yield takeEvery(ADD_USER, addUser);
}

export default function* userSaga(user: User) {
  yield all([watchUsers()]);
}
