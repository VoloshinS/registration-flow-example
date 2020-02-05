export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export interface User {
  username?: string;
  password?: string;
  description?: string;
}

export interface UserState {
  user?: Partial<User> | null;
  isAuthorized: boolean;
  error?: string;
}

interface AddUser {
  type: typeof ADD_USER;
}

interface AddUserSuccess {
  type: typeof ADD_USER_SUCCESS;
  payload: User;
}

interface AddUserFailure {
  type: typeof ADD_USER_FAILURE;
  payload: string;
}

export interface UpdateUser {
  type: typeof UPDATE_USER;
  payload: Partial<User>;
}

export interface DeleteUser {
  type: typeof DELETE_USER;
  payload: number;
}

export type UserActionTypes = AddUser | AddUserSuccess | AddUserFailure | UpdateUser | DeleteUser;
