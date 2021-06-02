import { combineReducers } from "redux";
import authReducer from "./auth";
import cardReducer from "./card";
import addressesReducer from "./addresses";
import routeReducer from "./route";

const rootReducer = combineReducers({ 
  auth: authReducer,
  card: cardReducer,
  addresses: addressesReducer,
  route: routeReducer,
});

 export default rootReducer;