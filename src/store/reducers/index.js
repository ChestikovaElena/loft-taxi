import { combineReducers } from "redux";
import authReducer from "./auth";
import cardReducer from "./card";

const rootReducer = combineReducers({ auth: authReducer, card: cardReducer });

 export default rootReducer;