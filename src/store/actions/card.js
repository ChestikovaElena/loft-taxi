export const GET_CARD = "GET_CARD";
export const GET_CARD_SUCCESS = "GET_CARDS_SUCCESS";
export const GET_CARD_FAILURE = "GET_CARDS_FAILURE";

export const getCard = (token) => ({ type: GET_CARD, payload: token});

export const getCardSuccess = ({ id, cardNumber, expiryDate, cardName, cvc }) => ({
  type: GET_CARD_SUCCESS,
  payload: { id, cardNumber, expiryDate, cardName, cvc },
});

export const getCardFailure = (error) => ({ type: GET_CARD_FAILURE, payload: error});