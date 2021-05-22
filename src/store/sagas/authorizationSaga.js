import { takeEvery, call, put } from 'redux-saga/effects';
import {serverLogIn} from '../../store/api/auth';
import {AUTHENTICATE, logIn, logInError} from '../../store/actions/auth';

export function* authenticateSaga(action) {
  const {email, password} = action.payload;
  const data = yield call(serverLogIn, email, password);
  if (data.success) {
    localStorage.setItem('token', data.token);
    yield put(logIn(data.token, email));
  } else {
    yield put(logInError(data.error));
  }
}

export function* authWatcher() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}