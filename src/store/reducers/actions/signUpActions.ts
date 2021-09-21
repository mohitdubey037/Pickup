import { Types } from "../SignUpReducer";
export const registerUser = (email) => ({ type: Types.REGISTER_USER, email });
export const setRegisterUserResponse = (res) => ({
  type: Types.REGISTER_USER_RESPONSE,
  res,
});
