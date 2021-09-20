import { setRegisterUserResponse } from "./../../store/reducers/actions/signUpActions";
import { REGISTER_COMPANY, REGISTER_USER } from "../../store/reducers/actions/actionTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { registerUserService } from "./../../services/SignUpSerivces/index";
import { showToast } from "utils";

function* registerUserWorker(action) {
  try {
    const res = yield call(registerUserService, action.email);
    yield put(setRegisterUserResponse(res.data?.data));
  } catch (err) {
    showToast(err.message, "error");
  }
}

function* registerCompanyDetailsWorker(action) {}

export function* registerUserWatcher() {
  yield takeLatest(REGISTER_USER, registerUserWorker);
}

export function* registerCompanyDetailsWatcher() {
  yield takeLatest(REGISTER_COMPANY, registerCompanyDetailsWorker);
}
