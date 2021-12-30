/* eslint-disable no-debugger */
import services from "../";


export const registerUserService = async (email: string) => {
  const res = await services.post("sign_up", { emailId: email });
  return res;
};
export const getCategoryList = async () => {
  try {
    const response = await services.get("order/business/category")
    return { response: response, success: true }
  } catch (err) {
    return { response: err, sucess: false };
  }
}
export const addShipmentDetail = async (body: any) => {
  try {

    const response = await services.post("order/business/create/single", body)
    return { response: response, success: true }
  } catch (err) {
    console.log(err, "serviceerr");
    return { response: err, sucess: false };
  }
};
 

export const getOrderDetails = async (orderId: any) => {
    try {
        const res = await services.get(`/order/${orderId}`)
        return { response: res, success: true }
    } catch (err) {
        // const response = (err instanceof Error)
        if (err.isAxiosError && err.response) {
            const errResponse = err.response;
            const errorMessage = errResponse?.data?.message?.message
            ? errResponse?.data?.message.message
            : errResponse?.data?.message
            
            return { response: errResponse, message: errorMessage, success: false };
            // Handle your error type safe here
        } else {
              return { response: err.response, success: false };
        }
    }
}
