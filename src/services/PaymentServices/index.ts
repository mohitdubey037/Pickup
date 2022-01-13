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

export const getUserCardsService = async () => {
    try {
        const res = await Services.get("api/profiles/paymentprofile/userprofilecards", type);
        return {response: res, error: null};
    } catch (error) {
        return {response: null, error: error};
    }
};

export const addNewCardService = async (body: any) => {
    try {
        const res = await Services.post("api/profiles/paymentprofile/adprofilecard", body, type)
        return {response: res, error: null};
    }catch(error){
        return {response: null, error: error};
    }
}

export const getInvoiceList = async ()=>{
    try {
        const res = await Services.get("order/business/invoices","order")
        console.log("resdata",res)
        return{response: res, error:null};
    }catch(error){
    return {response: null, error: error};
    }
}


// export const updateCard = async (cardData: cardData) => {
//     const res = await Services.post("business/forgotPassword", { emailId: cardData }, type);
//     return res;
// };

// export const deleteCard = async (deleteCardData: deleteCardData) => {
//     const res = await Services.post("business/resetPassword", deleteCardData, type);
//     return res;
// };

export const confirmPaymentService = async (body: any, invoiceId: number) => {
    try {
        const res = await Services.post(`/order/business/invoice/${invoiceId}/payment`, body, "order")
        return {response: res, error: null};

    }catch(error){
        return {response: null, error: error};
    }
};

export const confirmPaymentInDrawer = async (body: any) => {
    try {
        const header = {
            payment_gateway: "bambora"
        }
        const res = await Services.post(`api/payments`, body, "payment", "",  header )
        return {response: res, error: null};

    }catch(error){
        return {response: null, error: error};
    }
}

export const getInsuranceService = async (invoiceId: string) => {
    try {
        const res = await Services.get(`order/business/invoice/${invoiceId}/calculateInsurance`, "order");
        return {response: res, error: null};
    } catch (error) {
        return {response: null, error: error};
    }
};

export const addInsuranceService = async (invoiceId: string) => {
    try {
        const res = await Services.post(`order/business/invoice/${invoiceId}/addInsurance`, {}, "order");
        return {response: res, error: null};
    } catch (error) {
        return {response: null, error: error};
    }
};

export const removeInsuranceService = async (invoiceId: string) => {
    try {
        const res = await Services.put(`order/business/invoice/${invoiceId}/removeInsurance`, {}, "order");
        return {response: res, error: null};
    } catch (error) {
        return {response: null, error: error};
    }
};
