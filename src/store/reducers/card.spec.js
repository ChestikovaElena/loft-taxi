import card from './card';
import {getCard, getCardSuccess, getCardFailure,
        updateCard, updateCardSuccess, updateCardError}
      from '../actions/card';

describe("getCard", () => {
  describe("#GET_CARD", () => {
    it('returns isLoadding true', () => {
      expect(card({}, getCard())).toEqual({
        "isLoaddingCard": true,
        "isUpdatedCard": false,
      });
    });
  });

  describe("#GET_CARD_SUCCESS", () => {
    it('returns isLoadding false', () => {
      const dataPayload = {
        'id': '123',
        'expiryDate': '1/11',
        'cardName': 'Name',
        'cvc': '111',
        'cardNumber': '11112321'};
      expect(card({}, getCardSuccess(dataPayload))).toEqual({
        "isLoaddingCard": false,
        "isUpdatedCard": false,
        data: dataPayload,
      });
    });
  });

  describe("#GET_CARD_FAILURE", () => {
    it('returns isLoaddingCard false', () => {
      expect(card({}, getCardFailure())).toEqual({
        "isLoaddingCard": false,
        "isUpdatedCard": false,
      });
    });
  });
});

describe("updateCard", () => {
  describe("#UPDATE_CARD", () => {
    it('returns isUppdated false', () => {
      expect(card({}, updateCard({"cardNumber": "123"}))).toEqual({
        "isLoaddingCard": false,
        "isUpdatedCard": false
      });
    });
  });

  describe("#UPDATE_CARD_SUCCESS", () => {
    it('returns isUppdated true', () => {
      expect(card({}, updateCardSuccess())).toEqual({
        "isLoaddingCard": false,
        "isUpdatedCard": true
      });
    });
  });

  describe("#UPDATE_CARDS_ERROR", () => {
    it('returns isUppdated false', () => {
      expect(card({}, updateCardError())).toEqual({
        "isLoaddingCard": false,
        "isUpdatedCard": false,
      });
    });
  });
});