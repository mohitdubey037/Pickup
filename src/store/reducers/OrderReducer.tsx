import { createReducer, createActions } from "reduxsauce";
interface OrderType{
'Shipping ID':string
'Schedule':string
'Item Count':string
'Shipping Cost':string
}
interface IntialStateType{
orders:OrderType[]
}
const initialState :IntialStateType= {
  orders:[
     {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'09:00 - 06/06/21','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',},
    // {'Shipping ID':'TOR-0607-123','Schedule':'Right Now','Item Count':'1','Shipping Cost':'$50',}
]
};

const { Types, Creators } = createActions({
  confirmOrder:["res"]
});
export const onConfirmOrderSuccess = (state = initialState, action) => ({
  ...state,
  orders: [ ...state.orders,action.res]
});


const HANDLERS = {
  [Types.CONFIRM_ORDER]: onConfirmOrderSuccess,
  
};

const orderReducer = createReducer(initialState, HANDLERS);
const actions = Creators;
export { orderReducer, Types, actions, HANDLERS };
