import { createReducer, createActions } from "reduxsauce";

const initialState = {
    getCardDetailResponse: {},
    addNewCardResponse: null,
    updateCardResponse: null,
    deleteCardResponse: null,
    showLoader: false
};

const { Types, Creators } = createActions({
    getCards: ["getCards"],
    getCardDetailResponse: ["res"],
    addNewCard: ["cardData"],
    addNewCardResponse: ["res"],
    updateCard: ["cardData"],
    updateCardResponse: ["res"],
    deleteCard: ["deleteCardData"],
    deleteCardResponse: ["res"]
});

export const onGetAllCardSuccess = (state = initialState, action) => ({
    ...state,
    getCardDetailResponse: action.res,
});

export const onUpdateCardSucess = (state = initialState, action) => ({
    ...state,
    updateCardResponse: action.res,
});

export const onAddNewCardSucess = (state = initialState, action) => ({
    ...state,
    addNewCardResponse: action.res,
});

export const onDeleteCardSucess = (state = initialState, action) => ({
    ...state,
    deleteCardResponse: action.res,
});

export const onShowLoader = (state = initialState, action) => ({
    ...state,
    showLoader: action.flag,
});

const HANDLERS = {
    [Types.GET_CARD_DETAIL_RESPONSE]: onGetAllCardSuccess,
    [Types.ADD_NEW_CARD_RESPONSE]: onAddNewCardSucess,
    [Types.UPDATE_CARD_RESPONSE]: onUpdateCardSucess,
    [Types.DELETE_CARD_RESPONSE]: onDeleteCardSucess,
};
const paymentCardReducer = createReducer(initialState, HANDLERS);
const actions = Creators;
export { paymentCardReducer, Types, actions, HANDLERS };
