import { REGIESTER_USER } from "../../store/reducers/actions/actionTypes";
import { call, takeLatest } from "redux-saga/effects";
import { registerUserService } from "./../../services/SignUpSerivces/index";
import { showToast } from "utils";

function* registerUserWorker(action) {
  try {
    const res = yield call(registerUserService, action.email);
  } catch (err) {
    showToast(err.message, "error");
  }
}

export function* registerUserWatcher() {
  yield takeLatest(REGIESTER_USER, registerUserWorker);
}
