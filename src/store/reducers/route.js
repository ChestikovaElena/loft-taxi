import { GET_ROUTE_SUCCESS, GET_ROUTE_FAILURE } from "../actions/route";

const initialState = {
  isLoaddingRoute: false,
  route: {},
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROUTE_SUCCESS: {
      return { ...state, isLoaddingRoute: true, route: action.payload }
    }
    case GET_ROUTE_FAILURE: {
      return { ...state, isLoggedIn: false, error: action.payload }
    }
    default:
      return state;
  }
}