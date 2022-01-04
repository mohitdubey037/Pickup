import Services from "../";

export interface cardData {
    password: string;
    token: string;
}
export interface deleteCardData {
    password: string;
    token: string;
}
const type = "payment"

export const getUserCards = async () => {
    const res = await Services.get("/paymentprofile/userprofilecards", type);
    return res;
};

export const addNewCard = async (cardData: cardData) => {
    const res = await Services.post("business/forgotPassword", cardData, type);
    return res;
};

export const updateCard = async (cardData: cardData) => {
    const res = await Services.post("business/forgotPassword", { emailId: cardData }, type);
    return res;
};

export const deleteCard = async (deleteCardData: deleteCardData) => {
    const res = await Services.post("business/resetPassword", deleteCardData, type);
    return res;
};

export const getInsuranceService = async (invoiceId: string) => {
    try {
        const res = await Services.get(`order/business/invoice/${invoiceId}/calculateInsurance`, "order");
        return res
    } catch (error) {
        return error
    }
}

export const addInsuranceService = async (invoiceId: string) => {
    try {
        const res = await Services.post(`order/business/invoice/${invoiceId}/addInsurance`, {}, "order");
        return res
    } catch (error) {
        return error
    }
}

export const removeInsuranceService = async (invoiceId: string) => {
    try {
        const res = await Services.put(`order/business/invoice/${invoiceId}/removeInsurance`, {}, "order");
        return res
    } catch (error) {
        return error
    }
}
