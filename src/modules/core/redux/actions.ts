import {
  User,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  DELETE_USER,
  UPDATE_USER,
  UserActionTypes,
} from './types';

export function addUser(user: User): UserActionTypes {
  return {
    type: ADD_USER,
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

export function updateUser(id: number, { username, description }: Partial<User>): UserActionTypes {
  return {
    type: UPDATE_USER,
    payload: { username, description },
  };
}

export function deleteUser(username: number): UserActionTypes {
  return {
    type: DELETE_USER,
    payload: username,
  };
}
