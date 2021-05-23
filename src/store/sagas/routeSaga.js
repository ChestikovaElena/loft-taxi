import { takeEvery, call, put } from 'redux-saga/effects';
import {getRoute} from '../api/getRoute';
import {
  GET_ROUTE,
  getRouteSuccess,
  getRouteFailure
} from '../../store/actions/route';

export function* getRouteSaga() {
  const data = yield call(getRoute);

  const mockData = {
    0: [30.316273, 59.940578],
    1: [30.316589, 59.940495],
    2: [30.322144, 59.942886]
  };
  if (!!mockData) {
    yield put(getRouteSuccess(mockData));
  } else {
    yield put(getRouteFailure(data.error));
  }
}

export function* routeWatcher() {
  yield takeEvery(GET_ROUTE, getRouteSaga)
}