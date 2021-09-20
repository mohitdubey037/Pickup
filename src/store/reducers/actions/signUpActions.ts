import { REGISTER_USER, REGISTER_USER_RESPONSE } from "./actionTypes";
export const registerUser = (email) => ({ type: REGISTER_USER, email });
export const setRegisterUserResponse = (res) => ({
  type: REGISTER_USER_RESPONSE,
  res,
});
