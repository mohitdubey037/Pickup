import { all, fork } from "redux-saga/effects";
import { signInUserWatcher } from "./SignInSagas";
import {
  registerUserWatcher,
  registerCompanyDetailsWatcher,
  registerPasswordWatcher,
} from "./SignUpSagas/";
import { submitShingleShipmentWatcher } from "./SingleShipmentSagas";
export default function* rootSaga() {
  yield all([
    fork(registerUserWatcher),
    fork(registerCompanyDetailsWatcher),
    fork(registerPasswordWatcher),
    fork(signInUserWatcher),
    fork(submitShingleShipmentWatcher)
  ]);
}
