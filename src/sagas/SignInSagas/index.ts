import { forgetPasswordService, resetPasswordService, signInUserService } from "./../../services/SignInServices/index";
import { call, put, takeLatest } from "redux-saga/effects";
import { Types, actions } from "../../store/reducers/SignInReducer";
import { showToast } from "../../utils";
import { globalActions } from "store/reducers/GlobalReducer";

// eslint-disable-next-line require-yield
function* signInUserWorker(action) {
  try {
    yield put(globalActions.showLoader(true))
    const res = yield call(signInUserService, action.signInRequest);
 
    yield put(actions.signInUserResponse(res));
    yield put(globalActions.showLoader(false))

  } catch (err: any) {
    yield put(globalActions.showLoader(false))

    showToast(err.message, "error");
  }
}

function* forgetPasswordWorker(action) {
  try {
    yield put(globalActions.showLoader(true))
    const res = yield call(forgetPasswordService, action.email);
 
    yield put(actions.forgetPasswordResponse(res));
    yield put(globalActions.showLoader(false))

  } catch (err: any) {
    yield put(globalActions.showLoader(false))

    showToast(err.message, "error");
  }
}

function* resetPasswordWorker(action) {
  try {
    yield put(globalActions.showLoader(true))
    const res = yield call(resetPasswordService, action.password);
 
    yield put(actions.resetPasswordResponse(res));
    yield put(globalActions.showLoader(false))

  } catch (err: any) {
    yield put(globalActions.showLoader(false))

    showToast(err.message, "error");
  }
}

export function* signInUserWatcher() {
  yield takeLatest(Types.SIGN_IN_USER, signInUserWorker);
}
export function* forgotPasswordWatcher() {
  yield takeLatest(Types.FORGET_PASSWORD, forgetPasswordWorker);
}
export function* resetPasswordWatcher() {
  yield takeLatest(Types.RESET_PASSWORD, resetPasswordWorker);
}
