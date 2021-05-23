import { all, fork } from 'redux-saga/effects';
import { authWatcher } from './authorizationSaga';
import { regWatcher } from './registrationSaga';
import { getCardWatcher, saveCardWatcher } from './paymentSaga';
import { addressesWatcher } from './addressListSaga';
import { routeWatcher } from './routeSaga';

export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(regWatcher),
    fork(getCardWatcher),
    fork(saveCardWatcher),
    fork(addressesWatcher),
    fork(routeWatcher)
  ]);
};