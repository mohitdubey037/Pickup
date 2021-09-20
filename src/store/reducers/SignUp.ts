import { REGIESTER_USER_RESPONSE } from "./actionTypes";

const initialState = {};

export const signUp = (state = initialState, action: any) => {
  switch (action.type) {
    case REGIESTER_USER_RESPONSE:
      return { ...state, res: action.res };
    default:
      return state;
  }
};
