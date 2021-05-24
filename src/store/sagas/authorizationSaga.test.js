import { authWatcher, authenticateSaga } from './authorizationSaga';
import { takeEvery } from 'redux-saga/effects';
import { AUTHENTICATE, logIn, logInError } from '../actions/auth';
import * as authApi from '../api/auth';
import { runSaga } from '@redux-saga/core';

describe('authWatcher', () => {
  const genObject = authWatcher();

  it('should wait for every AUTHENTICATE action and call authenticateSaga', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(AUTHENTICATE, authenticateSaga)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('authenticateSaga', () => {

  it('should call api and dispatch LOG_IN action', async () => {
    const token = 'token';
    const dummySuccessResponse = {success: true, token};

    const requestAuth = jest
      .spyOn(authApi, 'serverLogIn')
      .mockImplementation(() => Promise.resolve(dummySuccessResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      authenticateSaga,
      { payload: { email: 'email', password: 'password'} }
    );

    expect(requestAuth).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([logIn(token)]);
    requestAuth.mockClear();
  });

  it('should call api and dispatch LOG_IN_ERROR action', async () => {
    const error = 'error';
    const dummyFailureResponse = {success: false, error};

    const requestAuth = jest
      .spyOn(authApi, 'serverLogIn')
      .mockImplementation(() => Promise.resolve(dummyFailureResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      authenticateSaga,
      { payload: { email: 'email', password: 'password'} }
    );

    expect(requestAuth).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([logInError(error)]);
    requestAuth.mockClear();
  })
})