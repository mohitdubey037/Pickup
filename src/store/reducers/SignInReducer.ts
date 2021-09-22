import { createReducer, createActions } from "reduxsauce";

const initialState = {
  signInResponse: {},
  showLoader:false
};

const { Types, Creators } = createActions({
  signInUser: ["signInRequest"],
  signInUserResponse: ["res"],
  showLoader:['flag']
});

export const onSignInSucess = (state = initialState, action) => ({
  ...state,
  signInUserResponse: action.res,
});
export const onShowLoader=(state = initialState, action) => ({
  ...state,
  showLoader: action.flag,
});

const HANDLERS = {
  [Types.SIGN_IN_USER_RESPONSE]: onSignInSucess,
  [Types.SHOW_LOADER]:onShowLoader
};
const signIn = createReducer(initialState, HANDLERS);
const actions = Creators;
export { signIn, Types, actions, HANDLERS };
