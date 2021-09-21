import { createTypes, createReducer } from "reduxsauce";

const initialState = {
  signUpResponse: {},
};

const Types = createTypes(`
REGISTER_USER_RESPONSE
REGISTER_USER
REGISTER_COMPANY
REGISTER_COMPANY_RESPONSE
`);

export const onRegisterSucess = (state = initialState, action) => {
  return { ...state, signUpResponse: action.res };
};

export const onCompanyRegisterSucess = (state = initialState, action) => {
  return { ...state, companyRegisterResponse: action.res };
};

const HANDLERS = {
  [Types.REGISTER_USER_RESPONSE]: onRegisterSucess,
  [Types.REGISTER_COMPANY_RESPONSE]: onCompanyRegisterSucess,
};

const signUp = createReducer(initialState, HANDLERS);

export { signUp, Types, HANDLERS };
