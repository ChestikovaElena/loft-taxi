import { addressesWatcher, getAddressesSaga } from './addressListSaga';
import { takeEvery } from 'redux-saga/effects';
import { GET_ADDRESSES, getAddressesSuccess, getAddressesFailure } from '../actions/addresses';
import * as addrListApi from '../api/getAddresses';
import { runSaga } from '@redux-saga/core';

describe('addressesWatcher', () => {
  const genObject = addressesWatcher();

  it('should wait for every GET_ADDRESSES action and call getAddressesSaga', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(GET_ADDRESSES, getAddressesSaga)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('getAddressesSaga', () => {

  it('should call api and dispatch GET_ADDRESSES_SUCCESS action', async () => {
    const addresses = 'addresses';
    const dummySuccessResponse = {addresses};

    const requestAddList = jest
      .spyOn(addrListApi, 'getAddresses')
      .mockImplementation(() => Promise.resolve(dummySuccessResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getAddressesSaga,
      { payload: { } }
    );

    expect(requestAddList).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getAddressesSuccess(addresses)]);
    requestAddList.mockClear();
  });

  it('should call api and dispatch LOG_IN_ERROR action', async () => {
    const error = 'error';
    const dummyFailureResponse = {error};

    const requestAddList = jest
      .spyOn(addrListApi, 'getAddresses')
      .mockImplementation(() => Promise.resolve(dummyFailureResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getAddressesSaga,
      { payload: { } }
    );

    expect(requestAddList).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getAddressesFailure(error)]);
    requestAddList.mockClear();
  })
})