import { call, takeEvery, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getType } from 'typesafe-actions';

import { User } from '../interfaces';
import { createUser, removeUser, changeUser } from '../api';

import { signIn, signOut } from './auth.duck';
import { addUser, updateUser, deleteUser } from './user.duck';

function* processAddUser(action: ReturnType<typeof addUser.request>) {
  try {
    const user: User = yield call(createUser, action.payload);
    yield put(addUser.success(user));
    yield put(signIn.success());
    yield put(push('/'));
  } catch (e) {
    yield put(addUser.failure(e.message));
  }
}

function* processUpdateUser(action: ReturnType<typeof updateUser.request>) {
  try {
    const user: User = yield call(changeUser, action.payload);

    yield put(updateUser.success(user));
  } catch (e) {
    yield put(updateUser.failure(e.message));
  }
}

function* processDeleteUser(action: ReturnType<typeof deleteUser.request>) {
  try {
    yield call(removeUser, action.payload);
    yield put(deleteUser.success());
    yield put(signOut.success());
    yield put(push('/login'));
  } catch (e) {
    yield put(deleteUser.failure(e.message));
  }
}

function* watchCreate() {
  yield takeEvery(getType(addUser.request), processAddUser);
}

function* watchUpdate() {
  yield takeEvery(getType(updateUser.request), processUpdateUser);
}

function* watchDelete() {
  yield takeEvery(getType(deleteUser.request), processDeleteUser);
}

export default function* userSaga() {
  yield all([watchCreate(), watchUpdate(), watchDelete()]);
}
