import { createReducer, createActions } from "reduxsauce";

const initialState = {
  signUpResponse: {},
  companyRegisterResponse: {},
  passwordRegisterResponse: {},
};

const { Types, Creators } = createActions({
  registerUserResponse: ["res"],
  registerUser: ["email"],
  registerCompany: ["companyDetails"],
  registerCompanyResponse: ["res"],
  registerPassword: ["passwordRequest"],
  registerPasswordResponse: ["res"],
});
export const onRegisterSucess = (state = initialState, action) => ({
  ...state,
  signUpResponse: action.res,
});

export const onCompanyRegisterSucess = (state = initialState, action) => ({
  ...state,
  companyRegisterResponse: action.res,
});

export const onRegisterPasswordSuccess = (state = initialState, action) => ({
  ...state,
  passwordRegisterResponse: action.res,
});

const HANDLERS = {
  [Types.REGISTER_USER_RESPONSE]: onRegisterSucess,
  [Types.REGISTER_COMPANY_RESPONSE]: onCompanyRegisterSucess,
  [Types.REGISTER_PASSWORD_RESPONSE]: onRegisterPasswordSuccess,
};

const signUp = createReducer(initialState, HANDLERS);
const actions = Creators;
export { signUp, Types, actions, HANDLERS };
