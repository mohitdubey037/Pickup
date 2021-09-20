import { REGIESTER_USER, REGIESTER_USER_RESPONSE } from "./actionTypes";
export const registerUser = (email) => ({ type: REGIESTER_USER, email });
export const setRegisterUserResponse = (res) => ({
  type: REGIESTER_USER_RESPONSE,
  res,
});
