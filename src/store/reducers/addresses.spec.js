import addresses from './addresses';
import {getAddresses, getAddressesSuccess, getAddressesFailure}
      from '../actions/addresses';

describe("getAddresses", () => {
  describe("#GET_ADDRESSES", () => {
    it('returns isLoaddingAddresses false', () => {
      expect(addresses({}, getAddresses())).toEqual({
        "isLoaddingAddresses": false
      });
    });
  });

  describe("#GET_ADDRESSES_SUCCESS", () => {
    it('returns isLoaddingAddresses true', () => {
      expect(addresses({}, getAddressesSuccess())).toEqual({
        "isLoaddingAddresses": true
      });
    });
  });

  describe("#GET_ADDRESSES_FAILURE", () => {
    it('returns isLoaddingCard false', () => {
      expect(addresses({}, getAddressesFailure())).toEqual({
        "isLoaddingAddresses": false
      });
    });
  });
});
