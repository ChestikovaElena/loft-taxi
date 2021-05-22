import card from './card';
import {getCard, getCardSuccess, getCardFailure} from '../actions/card';

describe("card", () => {
  describe("#GET_CARD", () => {
    it('returns isLoadding true', () => {
      expect(card({}, getCard())).toEqual({
        "isLoaddingCard": true});
    });
  });

  describe("#GET_CARD_SUCCESS", () => {
    it('returns isLoadding false', () => {
      expect(card({}, getCardSuccess())).toEqual({
        "isLoaddingCard": false});
    });
  });

  describe("#GET_CARDS_FAILURE", () => {
    it('returns isLoggedIn false', () => {
      expect(card({}, getCardFailure())).toEqual({
        "error": undefined,
        "isLoaddingCard": false,
        "isLoggedIn": false});
    });
  });
});