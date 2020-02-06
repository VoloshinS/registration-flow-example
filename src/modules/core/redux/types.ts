export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS';
export const SIGN_IN_USER_FAILURE = 'SIGN_IN_USER_FAILURE';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

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
  error?: string | null;
}

export interface AddUser {
  type: typeof ADD_USER;
  payload: User;
}

interface AddUserSuccess {
  type: typeof ADD_USER_SUCCESS;
}

interface AddUserFailure {
  type: typeof ADD_USER_FAILURE;
  payload: string;
}

export interface SignInUser {
  type: typeof SIGN_IN_USER;
  payload: User;
}

interface SignInUserSuccess {
  type: typeof SIGN_IN_USER_SUCCESS;
}

interface SignInUserFailure {
  type: typeof SIGN_IN_USER_FAILURE;
  payload: string;
}
export interface UpdateUser {
  type: typeof UPDATE_USER;
  payload: Partial<User>;
}

export interface SignOutUser {
  type: typeof SIGN_OUT_USER;
}

export interface DeleteUser {
  type: typeof DELETE_USER;
  payload: number;
}

export type UserActionTypes =
  | AddUser
  | AddUserSuccess
  | AddUserFailure
  | SignInUser
  | SignInUserSuccess
  | SignInUserFailure
  | SignOutUser
  | UpdateUser
  | DeleteUser;
