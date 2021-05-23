import {
  GET_ADDRESSES,
  GET_ADDRESSES_SUCCESS,
  GET_ADDRESSES_FAILURE
} from "../actions/addresses";

const initialState = {
  isLoaddingAddresses: false,
  error: '',
  addresses: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESSES:{
      return { ...state, isLoaddingAddresses: false };
    }
    case GET_ADDRESSES_SUCCESS: {
      return { ...state, isLoaddingAddresses: true, addresses: action.payload };
    }
    case GET_ADDRESSES_FAILURE: {
      return { ...state, isLoaddingAddresses: false, error: action.payload };
    }
    default:
      return state;
  }
}
