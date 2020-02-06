import {
  UserState,
  UserActionTypes,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
  SIGN_OUT_USER,
  DELETE_USER,
  UPDATE_USER,
} from './types';
import { initialState } from './constants';

export default function reducer(
  state: UserState = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case SIGN_IN_USER:
    case ADD_USER:
      return {
        ...state,
      };
    case SIGN_IN_USER_SUCCESS:
    case ADD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthorized: true,
        error: null,
      };
    case SIGN_IN_USER_FAILURE:
    case ADD_USER_FAILURE:
      return {
        ...state,
        isAuthorized: false,
        user: null,
        error: action.payload,
      };
    case SIGN_OUT_USER:
    case DELETE_USER:
      return {
        ...state,
        isAuthorized: false,
        user: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
