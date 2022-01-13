import {
  forgetPasswordService,
  resetPasswordService,
  signInUserService,
} from "./../../services/SignInServices/index";
import { call, put, takeLatest } from "redux-saga/effects";
import { Types, actions } from "../../store/reducers/SignInReducer";
import { showToast } from "../../utils";
import { globalActions } from "store/reducers/GlobalReducer";
import { actions as paymentActions } from "store/reducers/PaymentReducer";

// eslint-disable-next-line require-yield
function* signInUserWorker(action) {
  try {
    yield put(globalActions.showLoader(true));
    const res = yield call(signInUserService, action.signInRequest);

    yield put(actions.signInUserResponse(res));
    yield put(globalActions.showLoader(false));
    yield put(paymentActions.getCards());
} catch (err: any) {
      yield put(actions.signInUserResponse(err));
        yield put(globalActions.showLoader(false))

    // showToast(err.message, "error");
  }
}

function* forgetPasswordWorker(action) {
  try {
    yield put(globalActions.showLoader(true));
    const res = yield call(forgetPasswordService, action.email);

    yield put(actions.forgetPasswordResponse(res));
    yield put(globalActions.showLoader(false));
  } catch (err: any) {
    yield put(globalActions.showLoader(false));

    showToast(err.message, "error");
  }
}

function* resetPasswordWorker(action) {
  try {
    yield put(globalActions.showLoader(true));
    const res = yield call(resetPasswordService, action.resetPassword);

    yield put(actions.resetPasswordResponse(res));
    yield put(globalActions.showLoader(false));
  } catch (err: any) {
    yield put(globalActions.showLoader(false));

    showToast(err.message, "error");
  }
}

export function* signInUserWatcher() {
  // yield takeLatest(Types.SIGN_IN_USER_RESPONSE, signInUserWorker); // SIGN_IN_USER
  yield takeLatest(Types.SIGN_IN_USER, signInUserWorker);
}
export function* forgotPasswordWatcher() {
  yield takeLatest(Types.FORGET_PASSWORD, forgetPasswordWorker);
}
export function* resetPasswordWatcher() {
  yield takeLatest(Types.RESET_PASSWORD, resetPasswordWorker);
}
