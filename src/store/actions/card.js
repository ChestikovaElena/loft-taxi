export const GET_CARD = "GET_CARD";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";
export const GET_CARD_FAILURE = "GET_CARD_FAILURE";

export const UPDATE_CARD = "UPDATE_CARD";
export const UPDATE_CARD_ERROR = "UPDATE_CARD_ERROR";
export const UPDATE = "UPDATE";

export const getCard = (token) => ({ type: GET_CARD, payload: token});

export const getCardSuccess = ({ id, cardNumber, expiryDate, cardName, cvc }) => ({
  type: GET_CARD_SUCCESS,
  payload: { id, cardNumber, expiryDate, cardName, cvc },
});

export const getCardFailure = (error) => ({ type: GET_CARD_FAILURE, payload: error});

export const updateCard = () => ({ type: UPDATE_CARD });

export const updateCardError = (error) => ({ type: UPDATE_CARD_ERROR, payload: error});

export const update = ({ cardNumber, expiryDate, cardName, cvc, token }) => ({
  type: UPDATE,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
});