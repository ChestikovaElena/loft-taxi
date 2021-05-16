import { AUTHENTICATE, logIn, logInError } from "../actions/actions";
import {serverLogIn} from '../api/api';

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const data = await serverLogIn(email, password);
    console.log(data);
    if(data.success){
      store.dispatch(logIn(data.token))
    } else {
      store.dispatch(logInError(data.error))
    }
  } else {
    next(action);
  }
};