import { AuthUser } from "types";

const initState: { user: AuthUser | null } = {
  user: null,
};
export const auth = (state = initState, action: any) => {
  switch (action.type) {
    case "SET_LOGEDIN_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "LOGOUT_USER": {
      return {
        ...state,
        user: null,
      };
    }
    case "UPDATE_USER": {
      console.log(action.user);
      const { emailId, firstName, lastName, roleName, userDetails } =
        action?.user?.data;
      const { phoneNo } = userDetails;
      console.log(phoneNo);
      return {
        ...state,
        user: {
          ...state.user,
          emailId,
          firstName,
          lastName,
          roleDesignation: roleName,
          userDetails: {
            phoneNo: phoneNo,
          },
        },
      };
    }
    default:
      return state;
  }
};
