import { createReducer, createActions } from "reduxsauce";

const initialState = {
  showLoader: false,
};

const { Types, Creators } = createActions({
  showLoader: ["flag"],
});
export const onShowLoader = (state = initialState, action) => ({
  ...state,
  showLoader: action.flag,
});
const HANDLERS = {
  [Types.SHOW_LOADER]: onShowLoader,
};
const globalState = createReducer(initialState, HANDLERS);
const globalActions = Creators;
const globalTypes=Types
export { globalState, globalTypes, globalActions, HANDLERS };
