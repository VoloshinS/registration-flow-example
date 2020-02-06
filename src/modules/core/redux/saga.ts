import { call, takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { ADD_USER, AddUser, SIGN_IN_USER } from './types';
import { addUserSuccess, addUserFailure, signInUserSuccess, signInUserFailure } from './actions';
import { createUser, loginUser } from '../api';

function* addUser(action: AddUser) {
  try {
    yield call(createUser, action.payload);
    yield put(addUserSuccess());
    yield put(push('/'));
  } catch (e) {
    yield put(addUserFailure(e.message));
  }
}

function* signInUser(action: AddUser) {
  try {
    yield call(loginUser, action.payload);
    yield put(signInUserSuccess());
    yield put(push('/'));
  } catch (e) {
    yield put(signInUserFailure(e.message));
  }
}

function* watchCreate() {
  yield takeEvery(ADD_USER, addUser);
}

function* watchLogin() {
  yield takeEvery(SIGN_IN_USER, signInUser);
}

// function* watchLogout() {
//   yield takeEvery(SIGN_OUT_USER, addUser);
// }

export default function* userSaga() {
  yield all([watchCreate(), watchLogin()]);
}
