import { ActionType, createReducer, createAsyncAction } from 'typesafe-actions';
import { get, flow } from 'lodash/fp';

import { User } from '../interfaces';

import { AsyncStateSlice } from './interfaces';
import { initialAsyncState } from './constants';

const USER_REDUCER_KEY = 'user';

// ACTIONS:

export const addUser = createAsyncAction(
  'ADD_USER_REQUEST',
  'ADD_USER_SUCCESS',
  'ADD_USER_FAILURE'
)<User, User, string>();

export const updateUser = createAsyncAction(
  'UPDATE_USER_REQUEST',
  'UPDATE_USER_SUCCESS',
  'UPDATE_USER_FAILURE'
)<Partial<User>, User, string>();

export const deleteUser = createAsyncAction(
  'DELETE_USER_REQUEST',
  'DELETE_USER_SUCCESS',
  'DELETE_USER_FAILURE'
)<User['username'], undefined, string>();

export type UserActions = ActionType<typeof addUser | typeof updateUser | typeof deleteUser>;

// REDUCER:

type userState = AsyncStateSlice<User | null>;

const userReducer = createReducer<userState, UserActions>(initialAsyncState)
  .handleAction(addUser.success, (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
    error: null,
  }))
  .handleAction(addUser.failure, (state, action) => ({
    ...state,
    data: null,
    loading: false,
    error: action.payload,
  }))
  .handleAction(updateUser.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(updateUser.success, (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
    error: null,
  }))
  .handleAction(updateUser.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }))
  .handleAction(deleteUser.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(deleteUser.success, state => ({
    ...state,
    data: null,
    loading: false,
    error: null,
  }))
  .handleAction(deleteUser.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));

// SELECTORS:

const getStateSlice = get(USER_REDUCER_KEY);

export const getUser = flow(getStateSlice, get('data'));
export const getUserError = flow(getStateSlice, get('error'));
export const getUserIsSaving = flow(getStateSlice, get('loading'));

export default {
  [USER_REDUCER_KEY]: userReducer,
};
