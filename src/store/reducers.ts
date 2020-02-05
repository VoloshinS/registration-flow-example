import { combineReducers } from 'redux';

// import { moduleNameReducer } from '../modules/moduleName/redux';

const moduleNameReducer = { moduleStateKey: (s: any = {}) => s };

export default combineReducers({
  ...moduleNameReducer,
});
