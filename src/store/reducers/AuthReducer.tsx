import { AuthUser } from "types";

const initState: { user: AuthUser | null } = {
  user: null,
};

export const auth = (state = initState, action: any) => {
  switch (action.type) {
    case "SET_LOGEDIN_USER":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
