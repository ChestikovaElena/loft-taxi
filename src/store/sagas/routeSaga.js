import { takeEvery, call, put } from 'redux-saga/effects';
import {getRoute} from '../api/getRoute';
import {
  GET_ROUTE,
  getRouteSuccess,
  getRouteFailure
} from '../../store/actions/route';

export function* getRouteSaga() {
  const data = yield call(getRoute);

  const mockData = [
    [30.316273, 59.940578],
    [30.316589, 59.940495],
    [30.322144, 59.942886],
    [30.322148, 59.942891]
  ];
  if (!!mockData) {
    yield put(getRouteSuccess(mockData));
  } else {
    yield put(getRouteFailure(data.error));
  }
}

export function* routeWatcher() {
  yield takeEvery(GET_ROUTE, getRouteSaga)
}