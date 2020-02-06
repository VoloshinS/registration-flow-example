import {
  User,
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  DELETE_USER,
  UPDATE_USER,
  UserActionTypes,
  SIGN_OUT_USER,
} from './types';

export function addUser(user: User): UserActionTypes {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function addUserSuccess(user: User): UserActionTypes {
  return {
    type: ADD_USER_SUCCESS,
    payload: user,
  };
}

export function addUserFailure(error: string): UserActionTypes {
  return {
    type: ADD_USER_FAILURE,
    payload: error,
  };
}

export function signInUser(user: User): UserActionTypes {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
}

export function signInUserSuccess(user: User): UserActionTypes {
  return {
    type: SIGN_IN_USER_SUCCESS,
    payload: user,
  };
}

export function signInUserFailure(error: string): UserActionTypes {
  return {
    type: SIGN_IN_USER_FAILURE,
    payload: error,
  };
}

export function signOutUser(): UserActionTypes {
  return {
    type: SIGN_OUT_USER,
  };
}

export function updateUser({ username, description }: Partial<User>): UserActionTypes {
  return {
    type: UPDATE_USER,
    payload: { username, description },
  };
}

export function deleteUser(username: string): UserActionTypes {
  return {
    type: DELETE_USER,
    payload: username,
  };
}
