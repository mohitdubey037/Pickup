import { signInUserService } from "./../../services/SignInServices/index";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { Types, actions } from "store/reducers/SignInReducer";
import { showToast } from "utils";

// eslint-disable-next-line require-yield
function* signInUserWorker(action) {
  try {
    yield put(actions.showLoader(true));
    const res = yield call(signInUserService, action.signInRequest);
    yield put(actions.signInUserResponse(res));
    yield put(actions.showLoader(false));
  } catch (err) {
    yield put(actions.showLoader(false));
    showToast(err.message, "error");

  }
}

export function* signInUserWatcher() {
  yield takeEvery(Types.SIGN_IN_USER, signInUserWorker);
}
