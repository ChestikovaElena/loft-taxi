import { regWatcher, registrationSaga } from './registrationSaga';
import { takeEvery } from 'redux-saga/effects';
import { REGISTRATE, signIn, signInError } from '../actions/registration';
import * as regApi from '../api/signUp';
import { runSaga } from '@redux-saga/core';

describe('regWatcher', () => {
  const genObject = regWatcher();

  it('should wait for every REGISTRATE action and call registrationSaga', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(REGISTRATE, registrationSaga)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('registrationSaga', () => {

  it('should call api and dispatch SIGN_IN action', async () => {
    const token = 'token';
    const dummySuccessResponse = {success: true, token};

    const requestReg = jest
      .spyOn(regApi, 'signUp')
      .mockImplementation(() => Promise.resolve(dummySuccessResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      registrationSaga,
      { payload: { email: 'email', password: 'password', name: 'name', surname: 'surname'} }
    );

    expect(requestReg).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signIn(token)]);
    requestReg.mockClear();
  });

  it('should call api and dispatch SIGN_IN_ERROR action', async () => {
    const error = 'error';
    const dummyFailureResponse = {success: false, error};

    const requestReg = jest
      .spyOn(regApi, 'signUp')
      .mockImplementation(() => Promise.resolve(dummyFailureResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      registrationSaga,
      { payload: { email: 'email', password: 'password', name: 'name', surname: 'surname' } }
    );

    expect(requestReg).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signInError(error)]);
    requestReg.mockClear();
  })
})