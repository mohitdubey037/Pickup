/* eslint-disable no-debugger */
import { transformPayloadToBackend } from "app/pages/DashboardPage/DashboardContainers/SignleShipmentContainer/helper";
import services from "../";
import { showToast } from "utils";

export const getShipmentDetails = async (orderId: number,) => {

    try {
        const response = await services.post(`order/business/shipment/summary`, { shipmentIds: orderId });
        return { response: response, success: true }
    } catch (err) {
        return { response: err, sucess: false };
    }

};

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
        console.log(err)
        showToast(err.message,"error")
        return { response: err, sucess: false };
    }
};

export const addMultipleShipment = async (body: any) => {
    try {
        const response = await services.post("order/business/create/multiple", body)
        return { response: response, success: true }
    } catch (err) {
        console.log(err)
        showToast(err.message,"error")
        return { response: err, sucess: false };
    }
}

export const addShipmentForm = async (values: any) => {
    try {
        if (values.orders.length === 1) {
            const res = await addShipmentDetail(transformPayloadToBackend(values.orders[0]));
            return res
        } else {
            const orders = values.orders.map(item => transformPayloadToBackend(item))
            const body = { orders }
            const res = await addMultipleShipment(body);
            return res
        }
    } catch (err) {
        console.log(err)
        showToast(err.message,"error")
        return err;
    }
}

export const getOrderDetails = async (orderId: any) => {
    try {
        const res = await services.get(`order/business/shipment/${orderId}`)
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
};

export const orderImageUploadService = async (data: any) => {
    try {
        const res = await services.postImage(`order/business/uploadDocument`, data, "order", "", { "Content-Type": "multipart/form-data; boundary=???" })
        return { response: res, error: null }
    } catch (err) {
        return {response: null, error: err};
    }
}
