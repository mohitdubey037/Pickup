import { call, put, takeLatest } from "redux-saga/effects";
import { globalActions } from "store/reducers/GlobalReducer";
import { postChildAccountData } from "services/ChildAccount";

import { showToast } from "utils";

import { Types, actions } from "../../store/reducers/ChildAccountReducer";

function* submitChildAccountWorker(action) {
    console.log(action,'child account saga');
    try {
        yield put(globalActions.showLoader(true))

        const res = yield call(postChildAccountData, action.res);
        yield put(actions.setChildAccountDetails(res));
        yield put(globalActions.showLoader(false))

    } catch (err: any) {
        yield put(globalActions.showLoader(false))
        showToast(err.message, "error");
    }
}

export function* submitChildAccountWatcher() {
    yield takeLatest(Types.SUBMIT_DETAILS, submitChildAccountWorker);
}