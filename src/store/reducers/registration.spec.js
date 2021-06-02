import registration from './registration';
import { signIn, signInError } from '../actions/registration';

describe("registration", () => {
  describe("#SIGN_IN", () => {
    it('returns isLoggedIn true,', () => {
      expect(registration({}, signIn())).toEqual({
        "error": "",
        "isLoggedIn": true,
      });
    });
  });

  describe("#SIGN_IN_ERROR", () => {
    it('returns isLoggedIn false', () => {
      expect(registration({}, signInError())).toEqual({
        "isLoggedIn": false
      });
    });
  });
});
