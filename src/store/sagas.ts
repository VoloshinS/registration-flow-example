import { all } from 'redux-saga/effects';

// import { moduleNameSaga } from '../modules/moduleNameSaga/redux';

function* checkSagaConfiguration() {
  // tslint:disable-next-line 
  yield console.log('Saga configured properly');
}

export default function* rootSaga() {
  yield all([checkSagaConfiguration() /*, moduleNameSaga() */]);
}
