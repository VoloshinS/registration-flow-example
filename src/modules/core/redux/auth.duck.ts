import { ActionType, createReducer, createAsyncAction } from 'typesafe-actions';
import { get, flow } from 'lodash/fp';

import { User } from '../interfaces';

import { AsyncStateSlice } from './interfaces';
import { initialAsyncState } from './constants';

const AUTH_REDUCER_KEY = 'auth';

// ACTIONS:

export const signIn = createAsyncAction('SIGN_IN_REQUEST', 'SIGN_IN_SUCCESS', 'SIGN_IN_FAILURE')<
  User,
  void,
  string
>();

export const signOut = createAsyncAction(
  'SIGN_OUT_REQUEST',
  'SIGN_OUT_SUCCESS',
  'SIGN_OUT_FAILURE'
)<void, void, string>();

export type AuthActions = ActionType<typeof signIn | typeof signOut>;

// REDUCER:

type userState = AsyncStateSlice<boolean | null>;

const authReducer = createReducer<userState, AuthActions>(initialAsyncState)
  .handleAction(signIn.request, state => ({
    ...state,
    data: false,
    loading: true,
    error: null,
  }))
  .handleAction(signIn.success, state => ({
    ...state,
    data: true,
    loading: false,
    error: null,
  }))
  .handleAction(signIn.failure, (state, action) => ({
    ...state,
    data: false,
    loading: false,
    error: action.payload,
  }))
  .handleAction(signOut.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(signOut.success, (state, action) => ({
    ...state,
    data: false,
    loading: false,
    error: null,
  }))
  .handleAction(signOut.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));

// SELECTORS:

const getStateSlice = get(AUTH_REDUCER_KEY);

export const getIsAuthorized = flow(getStateSlice, get('data'));
export const getAuthError = flow(getStateSlice, get('error'));
export const getAuthIsProcessing = flow(getStateSlice, get('loading'));

export default {
  [AUTH_REDUCER_KEY]: authReducer,
};
