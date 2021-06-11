import { takeEvery, call, put } from 'redux-saga/effects';
import {getAddresses} from '../api/getAddresses';
import {
  GET_ADDRESSES,
  getAddressesSuccess,
  getAddressesFailure
} from '../../store/actions/addresses';

export function* getAddressesSaga() {
  const data = yield call(getAddresses);
  if (!!data.addresses) {
    yield put(getAddressesSuccess(data.addresses));
  } else {
    yield put(getAddressesFailure(data.error));
  }
}

export function* addressesWatcher() {
  yield takeEvery(GET_ADDRESSES, getAddressesSaga)
}