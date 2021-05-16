import auth from './auth'
import {logIn, logOut, logInError} from '../actions/auth'

describe("auth", () => {
  describe("#LOG_IN", () => {
    it('returns isLoggedIn true', () => {
      expect(auth({}, logIn())).toEqual({
      "error": "",
      "isLoggedIn": true,
      "token": undefined});
    });
  });

  describe("#LOG_OUT", () => {
    it('returns isLoggedIn false', () => {
      expect(auth({}, logOut())).toEqual({
        "isLoggedIn": false,
        "token": ""});
    });
  });

  describe("#LOG_IN_ERROR", () => {
    it('returns isLoggedIn false', () => {
      expect(auth({}, logInError())).toEqual({isLoggedIn: false});
    });
  });
});