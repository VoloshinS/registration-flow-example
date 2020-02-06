import { call, takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  ADD_USER,
  SIGN_IN_USER,
  DELETE_USER,
  UPDATE_USER,
  User,
  AddUser,
  DeleteUser,
  UpdateUser,
} from './types';
import { addUserSuccess, addUserFailure, signInUserSuccess, signInUserFailure } from './actions';
import { createUser, loginUser, removeUser, changeUser } from '../api';

function* addUser(action: AddUser) {
  try {
    const user: User = yield call(createUser, action.payload);
    yield put(addUserSuccess(user));
    yield put(push('/'));
  } catch (e) {
    yield put(addUserFailure(e.message));
  }
}

function* signInUser(action: AddUser) {
  try {
    const user: User = yield call(loginUser, action.payload);
    yield put(signInUserSuccess(user));
    yield put(push('/'));
  } catch (e) {
    yield put(signInUserFailure(e.message));
  }
}

function* deleteUser(action: DeleteUser) {
  yield call(removeUser, action.payload);
}

function* updateUser(action: UpdateUser) {
  yield call(changeUser, action.payload);
}

function* watchCreate() {
  yield takeEvery(ADD_USER, addUser);
}

function* watchLogin() {
  yield takeEvery(SIGN_IN_USER, signInUser);
}

function* watchDelete() {
  yield takeEvery(DELETE_USER, deleteUser);
}

function* watchUpdate() {
  yield takeEvery(UPDATE_USER, updateUser);
}

export default function* userSaga() {
  yield all([watchCreate(), watchLogin(), watchDelete(), watchUpdate()]);
}
