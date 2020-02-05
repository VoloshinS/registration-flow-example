import { combineReducers } from 'redux';

import { userReducer } from '../modules/core/redux';

export default combineReducers({
  ...userReducer,
});
