import { routeWatcher, getRouteSaga } from './routeSaga';
import { takeEvery } from 'redux-saga/effects';
import { GET_ROUTE, getRouteSuccess, getRouteFailure } from '../actions/route';
import * as routeApi from '../api/getRoute';
import { runSaga } from '@redux-saga/core';

describe('routeWatcher', () => {
  const genObject = routeWatcher();

  it('should wait for every GET_ROUTE action and call getRouteSaga', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(GET_ROUTE, getRouteSaga)
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('getRouteSaga', () => {

  it('should call api and dispatch GET_ROUTE_SUCCESS action', async () => {
    const route = 'route';
    const dummySuccessResponse = [[30, 30], [40,40]];

    const requestRoute = jest
      .spyOn(routeApi, 'getRoute')
      .mockImplementation(() => Promise.resolve(dummySuccessResponse));

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getRouteSaga,
      { payload: {} }
    );
    expect(requestRoute).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getRouteSuccess(dummySuccessResponse)]);
    requestRoute.mockClear();
  });

  it('should call api and dispatch GET_ROUTE_FAILURE action', async () => {
    const dummyFailureResponse = undefined;

    const requestRoute = jest
      .spyOn(routeApi, 'getRoute')
      .mockImplementation(() => Promise.resolve(dummyFailureResponse));

    const dispatched = [];
    
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getRouteSaga,
      { payload: {} }
    );

    expect(requestRoute).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getRouteFailure(dummyFailureResponse)]);
    requestRoute.mockClear();
  });
});