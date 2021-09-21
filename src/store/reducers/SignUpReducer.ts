import { createTypes, createReducer } from "reduxsauce";

const initialState = {
  signUpResponse: {},
};

const Types = createTypes(`
REGISTER_USER_RESPONSE
REGISTER_USER
REGISTER_COMPANY
`);

const onRegisterSucess = (state = initialState, action) => {
  return { ...state, signUpResponse: action.res };
};

export const HANDLERS = {
  [Types.REGISTER_USER_RESPONSE]: onRegisterSucess,
};
const signUp = createReducer(initialState, HANDLERS);

export { signUp, Types };
