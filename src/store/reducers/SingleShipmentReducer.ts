import { createReducer, createActions } from "reduxsauce";

const initialState = {
 
  };

  const { Types, Creators } = createActions({
   submitSingleShipment:['request']
  });
  const HANDLERS = {
    
  };
  
  const singleShipment = createReducer(initialState, HANDLERS);
  const actions = Creators;
  export { singleShipment, Types, actions, HANDLERS };