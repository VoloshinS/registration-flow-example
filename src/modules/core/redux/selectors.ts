import { get, flow } from 'lodash/fp';

import { USER_REDUCER_KEY } from './constants';

const getStateSlice = get(USER_REDUCER_KEY);

export const getIsAuthorized = flow(getStateSlice, get('isAuthorized'));
export const getUser = flow(getStateSlice, get('user'));
export const getError = flow(getStateSlice, get('error'));
