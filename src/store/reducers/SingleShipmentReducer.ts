import { createReducer, createActions } from "reduxsauce";

const initialState = {
    shipmentDetails: null,
    orderIds: []
};

const { Types, Creators } = createActions({
    setShipmentDetails: ["res"],

    submitShipment: ["res"],
    setShipmentOrderIds: ["response"],
    resetOrderIds: []
});

const onSetShipmentDetails = (state=initialState, action) => ({
    ...state,
    shipmentDetails: {...action.res}
});

const setShipmentOrderIds = (state = initialState, action) => ({ 
    ...state, 
    orderIds: action.response 
});

const resetOrderIds = (state = initialState, action) => ({ 
    ...state, 
    orderIds: [] 
});

const HANDLERS = {
    [Types.SET_SHIPMENT_DETAILS]: onSetShipmentDetails,
    [Types.SET_SHIPMENT_ORDER_IDS]: setShipmentOrderIds,
    [Types.RESET_ORDER_IDS]: resetOrderIds,
};

const singleShipment = createReducer(initialState, HANDLERS);
const actions = Creators;
export { singleShipment, Types, actions, HANDLERS };
