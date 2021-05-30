import { GET_ROUTE, GET_ROUTE_SUCCESS, GET_ROUTE_FAILURE } from "../actions/route";

const initialState = {
  isLoaddingRoute: false,
  route: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROUTE: {
      return { ...state, isLoaddingRoute: true }
    }
    case GET_ROUTE_SUCCESS: {
      return { ...state, isLoaddingRoute: true, route: action.payload }
    }
    case GET_ROUTE_FAILURE: {
      return { ...state, isLoaddingRoute: false }
    }
    default:
      return state;
  }
}
