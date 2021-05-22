import { SIGN_IN, SIGN_IN_ERROR } from "./actions";

const initialState = {
  isRegistriedIn: false,
  token: '',
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, isRegistriedIn: true, error: '', token: action.payload }
    }
    case SIGN_IN_ERROR: {
      return { ...state, isRegistriedIn: false, error: action.payload }
    }
    default:
      return state;
  }
}
