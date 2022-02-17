import { call, put, takeLatest } from "redux-saga/effects";
import { globalActions } from "store/reducers/GlobalReducer";
import { postChildAccountData } from "services/ChildAccount";

import { showToast } from "utils";

import { Types, actions } from "../../store/reducers/ChildAccountReducer";

function* submitChildAccountWorker(action) {
    try {
        yield put(globalActions.showLoader(true))

        const res = yield call(postChildAccountData, action.res);
        console.log(res.response.response.data);
        yield put(actions.setChildAccountDetails(res.response.response.data));
        yield put(globalActions.showLoader(false))

    } catch (err: any) {
        yield put(globalActions.showLoader(false))
        showToast(err.message, "error");
    }
}

export function* submitChildAccountWatcher() {
    yield takeLatest(Types.SUBMIT_DETAILS, submitChildAccountWorker);
}