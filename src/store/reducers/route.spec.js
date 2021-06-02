import route from './route';
import { getRouteSuccess, getRouteFailure } from '../actions/route';

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
});
