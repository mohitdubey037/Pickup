import { call, put, takeLatest } from "redux-saga/effects";
import {
  registerCompanyService,
  registerUserService,
  registerPasswordService,
} from "./../../services/SignUpSerivces/index";
import { showToast } from "../../utils";
import { Types, actions } from "../../store/reducers/SignUpReducer";

function* registerUserWorker(action) {
  try {
    const res = yield call(registerUserService, action.email);
    yield put(actions.registerUserResponse(res.data?.data));
  } catch (err:any) {
    showToast(err.message, "error");
  }
}

function* registerCompanyDetailsWorker(action) {
  try {
    const res = yield call(registerCompanyService, action.companyDetails);
    yield put(actions.registerCompanyResponse(res.data?.data));
  } catch (err:any) {
    showToast(err.message, "error");
  }
}

function* registerPasswordWorker(action) {
  try {
    const res = yield call(registerPasswordService, action.passwordRequest);
    yield put(actions.registerPasswordResponse(res));
  } catch (err:any) {
    showToast(err.message, "error");
  }
}

export function* registerUserWatcher() {
  yield takeLatest(Types.REGISTER_USER, registerUserWorker);
}

export function* registerCompanyDetailsWatcher() {
  yield takeLatest(Types.REGISTER_COMPANY, registerCompanyDetailsWorker);
}

export function* registerPasswordWatcher() {
  yield takeLatest(Types.REGISTER_PASSWORD, registerPasswordWorker);
}
