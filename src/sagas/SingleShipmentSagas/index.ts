import { call, put, takeLatest } from "redux-saga/effects";
import { addShipmentForm } from "services/SingleShipmentServices";
import { globalActions } from "store/reducers/GlobalReducer";
import { showToast } from "utils";
import { Types, actions } from "../../store/reducers/SingleShipmentReducer";

function* submitShipmentWorker(action) {
    try {
        yield put(globalActions.showLoader(true))

        const res = yield call(addShipmentForm, action.res);
        let orderIds:any = [];
        if(res?.response?.data?.data){
            if(action?.res?.orders?.length === 1){
                orderIds=[res.response.data.data]
            }else{
                orderIds= res.response.data.data
            }
        }
        yield put(actions.setShipmentOrderIds(orderIds));
        yield put(globalActions.showLoader(false))

    } catch (err: any) {
        yield put(globalActions.showLoader(false))
        showToast(err.message, "error");
    }
}

export function* submitShipmentWatcher() {
    yield takeLatest(Types.SUBMIT_SHIPMENT, submitShipmentWorker);
}
