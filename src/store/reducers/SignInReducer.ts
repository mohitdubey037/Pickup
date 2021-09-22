import { createReducer, createActions } from "reduxsauce";

const initialState = {
  signInResponse: {},
};

const { Types, Creators } = createActions({
  signInUser: ["signInRequest"],
  signInUserResponse: ["res"],
});

export const onSignInSucess = (state = initialState, action) => ({
  ...state,
  signInUserResponse: action.res,
});

const HANDLERS = {
  [Types.SIGN_IN_USER_RESPONSE]: onSignInSucess,
};
const signIn = createReducer(initialState, HANDLERS);
const actions = Creators;
export { signIn, Types, actions, HANDLERS };
