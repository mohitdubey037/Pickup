const initState = {
  user: "",
};

export const auth  = (state = initState, action: any) => {
  switch (action.type) {
    case "Logged-in":
      return {
        ...state,
        user: "isAuthentic",
      };
      default : return state;
  }
};
