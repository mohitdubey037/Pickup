import { REGISTER_USER_RESPONSE } from "./actions/actionTypes";

const initialState = {
  signUpResponse:{}
};

export const signUp = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_USER_RESPONSE:
      return { ...state, signUpResponse: action.res };
    default:
      return state;
  }
};
