import { call, put, takeLatest } from "redux-saga/effects";
import { getUserCardsService, addNewCardService,  } from "services/PaymentServices";
import { Types, actions } from "../../store/reducers/PaymentReducer";
import { showToast } from "../../utils";
import { globalActions } from "store/reducers/GlobalReducer";

// eslint-disable-next-line require-yield
function* getAllCardsWorker() {
  try {
    yield put(globalActions.showLoader(true))
    const res: { response: any, error: any } = yield call(getUserCardsService);
    if(!res.error){
        yield put(actions.paymentCardsData(res.response.data.data.data));
        // yield put(actions.onGetAllCardSuccess(res.response.data.data))
    }
    yield put(globalActions.showLoader(false))

  } catch (err: any) {
    yield put(globalActions.showLoader(false))

    showToast(err.message, "error");
  }
}

function* addNewCardWorker(action) {
  try {
    yield put(globalActions.showLoader(true))
    const res: { response: any, error: any } = yield call(addNewCardService, action.cardData);
    if(!res.error){
        // yield put(actions.paymentCardsData(res.response.data.data));
        yield put(actions.getCards());
        yield put(actions.addNewCardResponse(res.error))
    }else{
        yield put(actions.addNewCardResponse(res.error))
    }
    yield put(globalActions.showLoader(false))

  } catch (err: any) {
    yield put(globalActions.showLoader(false))

    showToast(err.message, "error");
  }
}

// function* updateCardWorker(action) {
//   try {
//     yield put(globalActions.showLoader(true))
//     const res = yield call(updateCard, action.cardData);
 
//     yield put(actions.updateCardResponse(res));
//     yield put(globalActions.showLoader(false))

//   } catch (err: any) {
//     yield put(globalActions.showLoader(false))

//     showToast(err.message, "error");
//   }
// }

// function* deleteCardWorker(action) {
//   try {
//     yield put(globalActions.showLoader(true))
//     const res = yield call(deleteCard, action.deleteCardData);
 
//     yield put(actions.deleteCardResponse(res));
//     yield put(globalActions.showLoader(false))

//   } catch (err: any) {
//     yield put(globalActions.showLoader(false))

//     showToast(err.message, "error");
//   }
// }

export function* getAllCardWatcher() {
  yield takeLatest(Types.GET_CARDS, getAllCardsWorker);
}
export function* addNewCardWatcher() {
  yield takeLatest(Types.ADD_NEW_CARD, addNewCardWorker);
}
// export function* updateCardWatcher() {
//   yield takeLatest(Types.UPDATE_CARD, updateCardWorker);
// }
// export function* deleteCardWatcher() {
//   yield takeLatest(Types.DELETE_CARD, deleteCardWorker);
// }
