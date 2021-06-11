import {
  GET_CARD,
  GET_CARD_SUCCESS,
  GET_CARD_FAILURE,
  UPDATE_CARD,
  UPDATE_CARD_SUCCESS,
  UPDATE_CARD_ERROR
} from "../actions/card";

const initialState = {
  isLoaddingCard: false,
  isUpdatedCard: false,
  error: '',
  data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD:{
      return { ...state, isLoaddingCard: true, isUpdatedCard: false };
    }
    case GET_CARD_SUCCESS: {
      return { ...state, isLoaddingCard: false, isUpdatedCard: false, data: action.payload };
    }
    case GET_CARD_FAILURE: {
      return { ...state, isLoaddingCard: false, isUpdatedCard: false, error: action.payload };
    }
    case UPDATE_CARD:{
      return { ...state, isLoaddingCard: false, isUpdatedCard: false };
    }
    case UPDATE_CARD_SUCCESS: {
      return { ...state, isLoaddingCard: false, isUpdatedCard: true};
    }
    case UPDATE_CARD_ERROR: {
      return { ...state, isLoaddingCard: false, isUpdatedCard: false, error: action.payload };
    }
    default:
      return state;
  }
}
