export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export const REGISTRATE = "REGISTRATE";

export const signIn = (token) => ({ type: SIGN_IN, payload: token});
export const signInError = (error) => ({ type: SIGN_IN_ERROR, payload: error});

export const registrate = (email, password, name, surname) => ({
  type: REGISTRATE,
  payload: { email, password, name, surname },
});