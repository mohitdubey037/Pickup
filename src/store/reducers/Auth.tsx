const initState = {
  user: "",
};

export const AuthReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "Logged-in":
      return {
        ...state,
        user: "isAuthentic",
      };
      default : return state;
  }
};
