import { createReducer, createActions } from "reduxsauce";

const initialState = {
    childAccountDetails: {},
    childAccountCreated: false
};

const { Types, Creators } = createActions({
    submitDetails: ["res"],
    setChildAccountDetails: ["res"],
    resetChildAccount: [],
});

const onSetChildAccountDetails = (state = initialState, action) => ({
    ...state,
    childAccountDetails: action.res === null ? null : action.res,
    childAccountCreated: true
});

const resetChildAccount = (state = initialState) => ({
    ...state,
    childAccountDetails: {},
    childAccountCreated: false,
});

const HANDLERS = {
    [Types.SET_CHILD_ACCOUNT_DETAILS]: onSetChildAccountDetails,
    [Types.RESET_CHILD_ACCOUNT]: resetChildAccount,
}

const childAccountDetails = createReducer(initialState, HANDLERS);
const actions = Creators;
export { childAccountDetails, Types, actions, HANDLERS };
