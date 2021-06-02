import { SIGN_IN, SIGN_IN_ERROR } from "../actions/registration";

const initialState = {
  isLoggedIn: false,
  token: '',
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, isLoggedIn: true, error: '', token: action.payload }
    }
    case SIGN_IN_ERROR: {
      return { ...state, isLoggedIn: false, error: action.payload }
    }
    default:
      return state;
  }
}
