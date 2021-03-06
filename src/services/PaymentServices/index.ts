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
export interface deleteCardInterface {
  cardId: string;
  cardFrom?: boolean|undefined;
  customerId?:string;
}
const type = "payment";

export const getUserCardsService = async () => {
  try {
    const res = await Services.get(
      "api/profiles/paymentprofile/userprofilecards",
      type
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const addNewCardService = async (body: any) => {
  try {
    const res = await Services.post(
      "api/profiles/paymentprofile/adprofilecard",
      body,
      type
    );
    if (res) showToast("Your card has been successfully added", "success");
    return { response: res, error: null };
  } catch (error) {
    // showToast(
    //   "Invalid card details. Please check your information and try again.",
    //   "error"
    // );
    showToast(error?.message || "Something Went Wrong", "error");
    return { response: null, error: error };
  }
};

export const getInvoiceList = async (urlParams?: string) => {
  try {
    let api = `order/business/invoices?${urlParams}`;
    const res = await Services.get(api, "order");
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const getMultipleInvoicesPdf = async (invoiceIds: number[]) => {
  try {
    let api = `order/business/invoice/invoiceIds/download`;
    const res: any = await Services.post(
      api,
      { invoiceIds },
      "order",
      "",
      {},
      { responseType: "arraybuffer" }
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

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
      `order/business/invoice/${invoiceId}/payment`,
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
    const res = await Services.post(
      `order/business/invoice/${invoiceId}/cardPayment`,
      body,
      "order"
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const deleteCard = async ({cardId,cardFrom,customerId}:deleteCardInterface) => {
  let api;
  if (!cardFrom) {
    api = `api/profiles/card/delete/${cardId}`
  }
  else if (cardFrom) {
    api = `api/profiles/card/delete/${customerId}/${cardId}`
  }
  try {
    const res = await Services.delete(api,{},"payment")
    showToast("Your card has been successfully removed", "success");
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const editCard = async (cardId: string) => {
  try {
    const res = await Services.put(
      `api/profiles/card/delete/${cardId}`,
      {},
      "payment"
    );
    showToast("Your card has been successfully removed", "success");
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

export const getInvoiceDetails = async (invoiceId: string) => {
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
