import { LOG_IN, LOG_OUT, LOG_IN_ERROR } from "../actions/auth";
import { SIGN_IN, SIGN_IN_ERROR } from "../actions/registration";

const initialState = {
  isLoggingIn: false,
  token: localStorage.getItem('token'),
  email: '',
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      case SIGN_IN: {
      return { ...state, isLoggingIn: false, error: '', token: action.payload}
    }
    case LOG_IN_ERROR:
      case SIGN_IN_ERROR: {
      return { ...state, isLoggingIn: false, error: action.payload }
    }
    case LOG_OUT: {
      return { ...state, isLoggingIn: false, token: '' }
    }
    default:
      return state;
  }
}
