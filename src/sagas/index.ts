import { all, fork } from "redux-saga/effects";
import { addNewCardWatcher, deleteCardWatcher, getAllCardWatcher, updateCardWatcher } from "./PaymentSaga";
import { forgotPasswordWatcher, resetPasswordWatcher, signInUserWatcher } from "./SignInSagas";
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
    fork(forgotPasswordWatcher),
    fork(resetPasswordWatcher),
    fork(submitShingleShipmentWatcher),
    fork(getAllCardWatcher),
    fork(addNewCardWatcher),
    fork(updateCardWatcher),
    fork(deleteCardWatcher),
  ]);
}
