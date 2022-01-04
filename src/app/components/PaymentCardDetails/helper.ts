import services from "services"

export const addNewCardHelper = async (body: any) => {
    try {
        const res = await services.post("/paymentprofile/adprofilecard", body, "payment")
        console.log("SavedCardres", res);
        return {response: res, error: null};

    }catch(error){
        console.log("SavedCarderr", error);
        return {response: null, error: error};
    }
}

export const confirmPaymentHelper = async (body: any, invoiceId: number) => {
    try {
        const res = await services.post(`/order/business/invoice/${invoiceId}/payment`, body, "order")
        console.log("SavedCardres", res);
        return {response: res, error: null};

    }catch(error){
        console.log("SavedCarderr", error);
        return {response: null, error: error};
    }
}