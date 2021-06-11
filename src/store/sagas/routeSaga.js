import { takeEvery, call, put } from 'redux-saga/effects';
import {getRoute} from '../api/getRoute';
import {
  GET_ROUTE,
  getRouteSuccess,
  getRouteFailure
} from '../../store/actions/route';

export function* getRouteSaga(action) {
  const {fromAddress, toAddress} = action.payload;
  const data = yield call(getRoute, fromAddress, toAddress);

  if (!!data) {
    yield put(getRouteSuccess(data));
  } else {
    yield put(getRouteFailure());
  }
}

export function* routeWatcher() {
  yield takeEvery(GET_ROUTE, getRouteSaga)
}