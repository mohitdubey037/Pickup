import { all, fork } from "redux-saga/effects";
import { registerUserWatcher } from "./SignUpSagas/";
export default function* rootSaga() {
  yield all([fork(registerUserWatcher)]);
}
