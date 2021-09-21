import {
  setCompanyRegisterUserResponse,
  setRegisterUserResponse,
} from "./../../store/reducers/actions/signUpActions";
import { call, put, takeLatest } from "redux-saga/effects";
import { registerCompanyService, registerUserService } from "./../../services/SignUpSerivces/index";
import { showToast } from "utils";
import { Types } from "store/reducers/SignUpReducer";

function* registerUserWorker(action) {
  try {
    const res = yield call(registerUserService, action.email);
    yield put(setRegisterUserResponse(res.data?.data));
  } catch (err) {
    showToast(err.message, "error");
  }
}

function* registerCompanyDetailsWorker(action) {
  try {
    const res = yield call(registerCompanyService, action.companyDetails);
    yield put(setCompanyRegisterUserResponse(res.data?.data));
  } catch (err) {
    showToast(err.message, "error");
  }
}

export function* registerUserWatcher() {
  yield takeLatest(Types.REGISTER_USER, registerUserWorker);
}

export function* registerCompanyDetailsWatcher() {
  yield takeLatest(Types.REGISTER_COMPANY, registerCompanyDetailsWorker);
}
