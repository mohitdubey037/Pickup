import { createReducer, createActions } from "reduxsauce";

const initialState = {
  singleShipmentResponse:null
};

const { Types, Creators } = createActions({
  submitSingleShipment: ["request"],
  submitSingleShipmentResponse: ["response"],
});

const onSubmitShipmentResponse = (state = initialState, action) => {
   return { ...state, singleShipmentResponse:action.response };
};

const HANDLERS = {
  [Types.SUBMIT_SINGLE_SHIPMENT_RESPONSE]: onSubmitShipmentResponse,
};

const singleShipment = createReducer(initialState, HANDLERS);
const actions = Creators;
export { singleShipment, Types, actions, HANDLERS };
