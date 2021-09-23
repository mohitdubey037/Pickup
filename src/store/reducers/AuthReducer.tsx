const initState = {
  user: null,
};

export const auth  = (state = initState, action: any) => {
  switch (action.type) {
    case "SET_LOGEDIN_USER":
      return {
        ...state,
        user: action.user,
       
      };
      default : return state;
  }
};
