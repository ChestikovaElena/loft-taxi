import registration from './registration';
import { signIn, signInError } from '../actions/registration';

describe("registration", () => {
  describe("#SIGN_IN", () => {
    it('returns isRegistriedIn true,', () => {
      expect(registration({}, signIn())).toEqual({
        "error": "",
        "isRegistriedIn": true,
      });
    });
  });

  describe("#SIGN_IN_ERROR", () => {
    it('returns isRegistriedIn false', () => {
      expect(registration({}, signInError())).toEqual({
        "isRegistriedIn": false
      });
    });
  });
});
