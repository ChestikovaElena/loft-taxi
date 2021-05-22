import { takeEvery, call, put } from 'redux-saga/effects';
import {signUp} from '../api/signUp';
import {REGISTRATE, signIn, signInError} from '../actions/registration';

export function* registrationSaga(action) {
  const {email, password, name, surname} = action.payload;
  const data = yield call(signUp, email, password, name, surname);
  if (data.success) {
    localStorage.setItem('token', data.token);
    yield put(signIn(data.token));
  } else {
    yield put(signInError(data.error));
  }
}

export function* regWatcher() {
  yield takeEvery(REGISTRATE, registrationSaga)
}