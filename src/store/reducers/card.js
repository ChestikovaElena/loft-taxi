import { GET_CARD, GET_CARD_SUCCESS, GET_CARD_FAILURE } from "../actions/card";

const initialState = {
  isLoadding: false,
  error: '',
  data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD: {
      return { ...state, isLoadding: true };
    }
    case GET_CARD_SUCCESS: {
      return { ...state, isLoadding: false, data: action.payload }
    }
    case GET_CARD_FAILURE: {
      return { ...state, isLoadding: false, error: action.payload }
    }
    default:
      return state;
  }
}
