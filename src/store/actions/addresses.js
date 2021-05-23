export const GET_ADDRESSES = "GET_ADDRESSES";
export const GET_ADDRESSES_SUCCESS = "GET_ADDRESSES_SUCCESS";
export const GET_ADDRESSES_FAILURE = "GET_ADDRESSES_FAILURE";

export const getAddressesSuccess = (addresses) => ({
  type: GET_ADDRESSES_SUCCESS, payload: addresses
});
export const getAddressesFailure = (error) => ({
  type: GET_ADDRESSES_FAILURE, payload: error
});

export const getAddresses = () => ({
  type: GET_ADDRESSES,
});