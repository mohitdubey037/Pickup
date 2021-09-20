import { REGIESTER_USER } from "./../../store/reducers/actionTypes";
import { call, takeLatest } from "redux-saga/effects";
import { registerUserService } from "./../../services/SignUpSerivces/index";

function* registerUserWorker(action) {
   yield call(registerUserService, action.email);
}

export function* registerUserWatcher() {
  yield takeLatest(REGIESTER_USER, registerUserWorker);
}
