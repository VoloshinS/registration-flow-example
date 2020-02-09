import { call, take, delay, all, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getType } from 'typesafe-actions';

import { User } from '../interfaces';
import { loginUser } from '../api';

import { addUser, deleteUser } from './user.duck';
import { signIn, signOut } from './auth.duck';

function* signInProcessing(action: ReturnType<typeof signIn.request>) {
  try {
    const user: User = yield call(loginUser, action.payload);

    yield put(signIn.success());
    yield put(addUser.success(user));
    yield put(push('/'));
  } catch (e) {
    yield put(signIn.failure(e.message));
    return e;
  }
}

function* watchLogin() {
  let i = 0;

  while (true) {
    if (i < 3) {
      const action = yield take(signIn.request);
      const signInResult = yield call(signInProcessing, action);

      if (signInResult instanceof Error) i++;
    } else {
      yield put(signIn.failure('You are blocked for 1 minute!'));
      i = yield delay(60000, 0);
    }
  }
}

function* processSignOut() {
  try {
    // yield call(logoutUser);
    yield put(signOut.success());
    // Remove user from redux state;
    yield put(deleteUser.success());
    yield put(push('/login'));
  } catch (e) {
    yield put(signOut.failure(e.message));
    return e;
  }
}

function* watchLogout() {
  yield takeEvery(getType(signOut.request), processSignOut);
}
export default function* authSaga() {
  yield all([watchLogin(), watchLogout()]);
}
