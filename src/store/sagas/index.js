import { all, fork } from 'redux-saga/effects';
import { authWatcher } from './authorizationSaga';
import { regWatcher } from './registrationSaga';
import { getCardWatcher, saveCardWatcher } from './paymentSaga';

export function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(regWatcher),
    fork(getCardWatcher),
    fork(saveCardWatcher)
  ]);
};