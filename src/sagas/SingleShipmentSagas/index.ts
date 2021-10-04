import { call, put, takeLatest } from "redux-saga/effects";
import { Types, actions } from "../../store/reducers/SingleShipmentReducer";

// eslint-disable-next-line require-yield
function* submitShingleShipmentWorker(action) {
  const data={name:'amit'}
  console.log({action})
  yield put(actions.submitSingleShipmentResponse(data))

}
export function* submitShingleShipmentWatcher() {
  yield takeLatest(Types.SUBMIT_SINGLE_SHIPMENT, submitShingleShipmentWorker);
}
