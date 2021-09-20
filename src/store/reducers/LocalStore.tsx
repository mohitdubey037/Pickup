const initState = {
    showSplash: true,
  };
  
  export const localStore = (state = initState, action: any) => {
    switch (action.type) {
      case "HIDE_SPLASH":
        return {
          ...state,
          showSplash: false,
        };
        default : return state;
    }
  };
  