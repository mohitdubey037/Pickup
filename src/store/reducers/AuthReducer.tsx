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
      const {
        emailId,
        firstName,
        lastName,
        roleName,
        userDetails,
        profileImage,
      } = action.user;
      const { phoneNo } = userDetails;
      return {
        ...state,
        user: {
          ...state.user,
          emailId,
          firstName,
          lastName,
          profileImage,
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
