import {
  UserState,
  UserActionTypes,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  DELETE_USER,
  UPDATE_USER,
} from './types';
import { initialState } from './constants';

export default function reducer(
  state: UserState = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        isAuthorized: false,
        user: null,
        error: action.payload,
      };
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
