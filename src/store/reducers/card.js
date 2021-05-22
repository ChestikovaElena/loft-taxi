import {
  GET_CARD,
  GET_CARD_SUCCESS,
  GET_CARD_FAILURE,
  UPDATE_CARD,
  UPDATE_CARD_ERROR
} from "../actions/card";

const initialState = {
  isLoaddingCard: false,
  error: '',
  data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD: {
      return { ...state, isLoaddingCard: true };
    }
    case GET_CARD_SUCCESS: {
      return { ...state, isLoaddingCard: true, data: action.payload }
    }
    case GET_CARD_FAILURE: {
      return { ...state, isLoaddingCard: false, error: action.payload }
    }
    case UPDATE_CARD: {
      return { ...state, isLoaddingCard: true }
    }
    case UPDATE_CARD_ERROR: {
      return { ...state, isLoaddingCard: false, error: action.payload }
    }
    default:
      return state;
  }
}
