export const GET_CARD = "GET_CARD";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";
export const GET_CARD_FAILURE = "GET_CARD_FAILURE";

export const UPDATE_CARD_SUCCESS = "UPDATE_CARD_SUCCESS";
export const UPDATE_CARD_ERROR = "UPDATE_CARD_ERROR";
export const UPDATE_CARD = "UPDATE_CARD";

export const getCard = (token) => ({ type: GET_CARD, payload: token});

export const getCardSuccess = ( {id, expiryDate, cardName, cvc, cardNumber} ) => ({
  type: GET_CARD_SUCCESS,
  payload: { id, expiryDate, cardName, cvc, cardNumber },
});

export const getCardFailure = (error) => ({
  type: GET_CARD_FAILURE,
  payload: error
});

export const updateCardSuccess = () => ({ type: UPDATE_CARD_SUCCESS });

export const updateCardError = (error) => ({ type: UPDATE_CARD_ERROR, payload: error});

export const updateCard = ({ cardNumber, expiryDate, cardName, cvc, token }) => ({
  type: UPDATE_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
});