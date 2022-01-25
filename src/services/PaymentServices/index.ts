import Services from "../";
import { showToast } from "utils";
export interface cardData {
  password: string;
  token: string;
}
export interface deleteCardData {
  password: string;
  token: string;
}
const type = "payment";

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
        if(res)showToast('Your card has been successfully added', "success");
        return {response: res, error: null};
    }catch(error){
        return {response: null, error: error};
    }
}

export const getInvoiceList = async ()=>{
    try {
        const res = await Services.get("order/business/invoices","order")
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
    const res = await Services.post(
      `/order/business/invoice/${invoiceId}/payment`,
      body,
      "order"
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const confirmPaymentInDrawer = async (body: any, invoiceId: string) => {
    try {
        // const header = {
        //     payment_gateway: "bambora"
        // }
        const res = await Services.post(`order/business/invoice/${invoiceId}/cardPayment`, body, "order" )
        return {response: res, error: null};

    }catch(error){
        return {response: null, error: error};
    }
}

export const deleteCard = async (profileId: string, cardId: string) => {
  try {
    const res = await Services.delete(
      `api/profiles/${profileId}/cards/${cardId}`,{},
      "payment"
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const getInsuranceService = async (invoiceId: string) => {
  try {
    const res = await Services.get(
      `order/business/invoice/${invoiceId}/calculateInsurance`,
      "order"
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const addInsuranceService = async (invoiceId: string) => {
  try {
    const res = await Services.post(
      `order/business/invoice/${invoiceId}/addInsurance`,
      {},
      "order"
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const removeInsuranceService = async (invoiceId: string) => {
  try {
    const res = await Services.put(
      `order/business/invoice/${invoiceId}/removeInsurance`,
      {},
      "order"
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const getOrderDetails = async (invoiceId: string) => {
  console.log(invoiceId);
  try {
    const res: any = await Services.get(
      `order/business/invoice/${invoiceId}`,
      "order"
    );
    return { response: res, error: null };
  } catch (error) {
    showToast(error.message, "error");
    return { response: null, error: error };
  }
};
// export const editCardService = async (values: any) => {
//   try {
//     const body = {
      
//       "function": values.function,
//       "name": values.name,
//       "number": values.number,
//       "expiry_month": values.expiry_month,
//       "expiry_year": values.expiry_year,
//       "card_type": values.card_type
//     }
//       const res = await Services.put(`profiles/${values.customer_code}/cards/${values.cardId}`, body, type)
//       if(res)showToast('Your card has been edited successfully', "success");
//       return {response: res, error: null};
//   }catch(error){
//       return {response: null, error: error};
//   }
// }