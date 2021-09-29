import { call, put, takeLatest } from "redux-saga/effects";
import {
  registerCompanyService,
  registerUserService,
  registerPasswordService,
} from "./../../services/SignUpSerivces/index";
import { showToast } from "../../utils";
import { globalActions } from "store/reducers/GlobalReducer";
import { Types, actions } from "../../store/reducers/SingleShipmentReducer";

// eslint-disable-next-line require-yield
function* submitShingleShipmentWorker(action) {
  console.log("Action Called");
}
export function* submitShingleShipmentWatcher() {
  yield takeLatest(Types.SUBMIT_SINGLE_SHIPMENT, submitShingleShipmentWorker);
}
