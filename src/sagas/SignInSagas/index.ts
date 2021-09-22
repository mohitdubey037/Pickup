import { call, put, takeLatest } from "redux-saga/effects";
import { Types, actions } from "store/reducers/SignInReducer";

function* signInUserWorker(action) {
 }

export function* signInUserWatcher() {
  yield takeLatest(Types.SIGN_IN_USER, signInUserWorker);
}
