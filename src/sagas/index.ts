import { all, fork } from "redux-saga/effects";
import {
  registerUserWatcher,
  registerCompanyDetailsWatcher,
  registerPasswordWatcher,
} from "./SignUpSagas/";
export default function* rootSaga() {
  yield all([
    fork(registerUserWatcher),
    fork(registerCompanyDetailsWatcher),
    fork(registerPasswordWatcher),
  ]);
}
