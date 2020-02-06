import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import { userReducer } from '../modules/core/redux';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...userReducer,
  });
