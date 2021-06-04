import route from './route';
import { getRouteSuccess, getRouteFailure, getRoute, resetRoute } from '../actions/route';

describe("route", () => {
  describe("#GET_ROUTE_SUCCESS", () => {
    it('returns isLoaddingRoute false,', () => {
      expect(route({}, getRouteSuccess())).toEqual({
        "isLoaddingRoute": false
      });
    });
  });

  describe("#GET_ROUTE_FAILURE", () => {
    it('returns isLoaddingRoute false', () => {
      expect(route({}, getRouteFailure())).toEqual({
        "isLoaddingRoute": false,
      });
    });
  });

  describe("#GET_ROUTE", () => {
    it('returns isLoaddingRoute true', () => {
      const dataPayload = {
        'fromAddress': 'fromAddress',
        'toAddress': 'toAddress',
      }
      expect(route({}, getRoute(dataPayload))).toEqual({
        "isLoaddingRoute": true
      });
    });
  });

  describe("#RESET_ROUTE", () => {
    it('returns isLoaddingRoute false', () => {
      const dataPayload = [];
      expect(route({}, resetRoute(dataPayload))).toEqual({
        "isLoaddingRoute": false,
        route: dataPayload
      });
    });
  });
});
