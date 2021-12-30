import { createReducer, createActions } from "reduxsauce";

const initialState = {
    signInUserResponse: {},
    forgetPasswordResponse: null,
    resetPasswordResponse: null,
    showLoader: false
};

const { Types, Creators } = createActions({
    signInUser: ["signInRequest"],
    signInUserResponse: ["res"],
    forgetPassword: ["email"],
    forgetPasswordResponse: ["res"],
    resetPassword: ["password"],
    resetPasswordResponse: ["res"]
});

export const onSignInSucess = (state = initialState, action) => ({
    ...state,
    signInUserResponse: action.res,
});

export const onForgetPasswordSucess = (state = initialState, action) => ({
    ...state,
    forgetPasswordResponse: action.res,
});

export const onResetPasswordSucess = (state = initialState, action) => ({
    ...state,
    resetPasswordResponse: action.res,
});

export const onShowLoader = (state = initialState, action) => ({
    ...state,
    showLoader: action.flag,
});

const HANDLERS = {
    [Types.SIGN_IN_USER_RESPONSE]: onSignInSucess,
    [Types.FORGET_PASSWORD_RESPONSE]: onForgetPasswordSucess,
    [Types.RESET_PASSWORD_RESPONSE]: onResetPasswordSucess,
};
const signIn = createReducer(initialState, HANDLERS);
const actions = Creators;
export { signIn, Types, actions, HANDLERS };
