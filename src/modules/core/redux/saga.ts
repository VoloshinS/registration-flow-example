import { call, takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { ADD_USER, AddUser } from './types';
import { addUserSuccess, addUserFailure } from './actions';
import { createUser } from '../api';

function* addUser(action: AddUser) {
  try {
    yield call(createUser, action.payload);
    yield put(addUserSuccess());
    yield put(push('/'));
  } catch (e) {
    yield put(addUserFailure(e.message));
  }
}

function* watchUsers() {
  yield takeEvery(ADD_USER, addUser);
}

export default function* userSaga() {
  yield all([watchUsers()]);
}
