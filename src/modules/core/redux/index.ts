import { default as reducer } from './reducer';
import { USER_REDUCER_KEY } from './constants';

export { default as userSaga } from './saga';
export * from './selectors';
export * from './actions';

export const userReducer = {
  [USER_REDUCER_KEY]: reducer,
};
