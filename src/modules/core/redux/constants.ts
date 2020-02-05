import { UserState } from './types';

export const USER_REDUCER_KEY = 'userState';

export const initialState: UserState = {
  user: null,
  isAuthorized: false,
};
