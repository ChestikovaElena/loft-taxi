import { takeEvery, call, put } from 'redux-saga/effects';
import {getCardDataFromServer} from '../api/getCard';
import {updateCardDataInServer} from '../api/updateCard';
import {
  GET_CARD,
  getCardSuccess,
  getCardFailure,
  UPDATE_CARD,
  updateCardSuccess,
  updateCardError
} from "../actions/card";

export function* loadProfile(action) {
  const token = action.payload;
  const data = yield call(getCardDataFromServer, token);
  if (data.id) {
    yield put(getCardSuccess(data));
  } else {
    yield put(getCardFailure(data.error));
  }
}

export function* updateProfile(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const data = yield call(
    updateCardDataInServer,
    cardNumber, expiryDate,
    cardName, cvc, token
  );
  if (data.success) {
    yield put(updateCardSuccess());
  } else {
    yield put(updateCardError(data.error));
  }
}

export function* getCardWatcher() {
  yield takeEvery(GET_CARD, loadProfile);
}

export function* saveCardWatcher() {
  yield takeEvery(UPDATE_CARD, updateProfile);
}