import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import authReducer from '../modules/core/redux/auth.duck';
import userReducer from '../modules/core/redux/user.duck';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...authReducer,
    ...userReducer,
  });
