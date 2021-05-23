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
  isUpdatingCard: false,
  error: '',
  data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD:
    case UPDATE_CARD:{
      return { ...state, isLoaddingCard: true, isUpdatingCard: false };
    }
    case GET_CARD_SUCCESS: {
      return { ...state, isLoaddingCard: false, data: action.payload };
    }
    case GET_CARD_FAILURE: {
      return { ...state, isLoaddingCard: false, error: action.payload };
    }
    case UPDATE_CARD_SUCCESS: {
      return { ...state, isLoaddingCard: false, isUpdatingCard: true};
    }
    case UPDATE_CARD_ERROR: {
      return { ...state, isLoaddingCard: false, error: action.payload };
    }
    default:
      return state;
  }
}
