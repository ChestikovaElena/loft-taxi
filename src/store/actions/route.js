export const GET_ROUTE = "GET_ROUTE";
export const GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS";
export const GET_ROUTE_FAILURE = "GET_ROUTE_FAILURE";

export const getRouteSuccess = (route) => ({
  type: GET_ROUTE_SUCCESS, payload: route
});
export const getRouteFailure = ([]) => ({
  type: GET_ROUTE_FAILURE, payload: []
});

export const getRoute = ({fromAddress, toAddress} )=> ({
  type: GET_ROUTE, payload: {fromAddress, toAddress}
});