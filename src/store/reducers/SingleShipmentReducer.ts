import { createReducer, createActions } from "reduxsauce";

const initialState = {
    shipmentDetails: null,
    orderIds: [6002],
    invoiceId: null,
};

const { Types, Creators } = createActions({
    setShipmentDetails: ["res"],
    submitShipment: ["res"],
    setShipmentOrderIds: ["response"],
    setInvoice: ["response"],
    resetOrderIds: [],
    resetSingleShipment: [],
});
    
const onSetShipmentDetails = (state = initialState, action) => ({
    ...state,
    shipmentDetails: action.res === null ? null : { ...action.res },
});

const setShipmentOrderIds = (state = initialState, action) => ({
    ...state,
    orderIds: action.response,
});

const setInvoiceId = (state = initialState, action) => ({
    ...state,
    invoiceId: action.response,
});

const resetOrderIds = (state = initialState) => ({
    ...state,
    orderIds: [],
});

const resetSingleShipment = () => ({
    shipmentDetails: null,
    orderIds: [],
    invoiceId: null,
});

const HANDLERS = {
    [Types.SET_SHIPMENT_DETAILS]: onSetShipmentDetails,
    [Types.SET_SHIPMENT_ORDER_IDS]: setShipmentOrderIds,
    [Types.SET_INVOICE]: setInvoiceId,
    [Types.RESET_ORDER_IDS]: resetOrderIds,
    [Types.RESET_SINGLE_SHIPMENT]: resetSingleShipment,
};

const singleShipment = createReducer(initialState, HANDLERS);
const actions = Creators;
export { singleShipment, Types, actions, HANDLERS };
