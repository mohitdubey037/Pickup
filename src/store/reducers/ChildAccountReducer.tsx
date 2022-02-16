import { createReducer, createActions } from "reduxsauce";

const initialState = {
    childAccountDetails: null
};

const { Types, Creators } = createActions({
    submitDetails: ["res"],
    setChildAccountDetails: ["res"]
});

const onSetChildAccountDetails = (state = initialState, action) => ({
    ...state,
    childAccountDetails: action.res === null ? null : { ...action.res },
});

const HANDLERS = {
    [Types.SET_CHILD_ACCOUNT_DETAILS]: onSetChildAccountDetails,
}

const childAccountDetails = createReducer(initialState, HANDLERS);
const actions = Creators;
export { childAccountDetails, Types, actions, HANDLERS };
