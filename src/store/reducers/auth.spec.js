import auth from './auth'
import {logIn, logOut, logInError} from '../actions/auth'

describe("auth", () => {
  describe("#LOG_IN", () => {
    it('returns isLoggingIn false', () => {
      expect(auth({}, logIn())).toEqual({
      "error": "",
      "isLoggingIn": false});
    });
  });

  describe("#LOG_OUT", () => {
    it('returns isLoggingIn false', () => {
      expect(auth({}, logOut())).toEqual({
        "isLoggingIn": false,
        "token": ""});
    });
  });

  describe("#LOG_IN_ERROR", () => {
    it('returns isLoggingIn false', () => {
      expect(auth({}, logInError())).toEqual({isLoggingIn: false});
    });
  });
});