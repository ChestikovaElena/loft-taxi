import { getCardWatcher, loadProfile, saveCardWatcher, updateProfile } from './paymentSaga';
import { takeEvery } from 'redux-saga/effects';
import { GET_CARD,
  getCardSuccess,
  getCardFailure,
  UPDATE_CARD,
  updateCardSuccess,
  updateCardError }
from '../actions/card';
import * as cardApi from '../api/getCard';
import * as cardUpdateApi from '../api/updateCard';
import { runSaga } from '@redux-saga/core';

describe('getCardWatcher', () => {
  const genObject = getCardWatcher();

  it('should wait for every GET_CARD action and call loadProfile', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(GET_CARD, loadProfile)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('loadProfile', () => {

  it('should call api and dispatch GET_CARD_SUCCESS action', async () => {
    const dummySuccessResponse = {
      id: 'id',
      cardNumber: 'cardNumber',
      expiryDate: 'expiryDate',
      cardName: 'cardName',
      cvc: 'cvc'};

    const requestGetCard = jest
      .spyOn(cardApi, 'getCardDataFromServer')
      .mockImplementation(() => Promise.resolve(dummySuccessResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      loadProfile,
      { payload: { token: 'token'} }
    );

    expect(requestGetCard).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getCardSuccess(id, cardNumber, expiryDate, cardName, cvc)]);
    requestGetCard.mockClear();
  });

  it('should call api and dispatch GET_CARD_FAILURE action', async () => {
    const error = 'error';
    const dummyFailureResponse = {success: false, error};

    const requestGetCard = jest
      .spyOn(cardApi, 'getCardDataFromServer')
      .mockImplementation(() => Promise.resolve(dummyFailureResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      loadProfile,
      { payload: { token: 'token'} }
    );

    expect(requestGetCard).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getCardFailure(error)]);
    requestGetCard.mockClear();
  });
});

describe('saveCardWatcher', () => {
  const genObject = saveCardWatcher();

  it('should wait for every UPDATE_CARD action and call updateProfile', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(UPDATE_CARD, updateProfile)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('updateProfile', () => {

  it('should call api and dispatch UPDATE_CARD_SUCCESS action', async () => {
    const dummySuccessResponse = {success: true};

    const requestUpdateCard = jest
      .spyOn(cardUpdateApi, 'updateCardDataInServer')
      .mockImplementation(() => Promise.resolve(dummySuccessResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      updateProfile,
      { payload: { token: 'token'} }
    );

    expect(requestUpdateCard).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([updateCardSuccess(id, cardNumber, expiryDate, cardName, cvc)]);
    requestUpdateCard.mockClear();
  });

  it('should call api and dispatch GET_CARD_FAILURE action', async () => {
    const error = 'error';
    const dummyFailureResponse = {success: false, error};

    const requestUpdateCard = jest
      .spyOn(cardUpdateApi, 'updateCardDataInServer')
      .mockImplementation(() => Promise.resolve(dummyFailureResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      updateProfile,
      { payload: {
        cardNumber:'cardNumber',
        expiryDate: 'expiryDate',
        cardName: 'cardName',
        cvc: 'cvc',
        token: 'token'} }
      );

    expect(requestUpdateCard).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getCardFailure(error)]);
    requestUpdateCard.mockClear();
  });
});