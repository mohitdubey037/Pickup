import { showToast } from "utils";
import { transformPayloadToBackend } from "app/pages/DashboardPage/DashboardContainers/SignleShipmentContainer/helper";
import services from "../";

export const getShipmentDetails = async (orderId: number) => {
  try {
    const res = await services.post(`order/business/shipment/summary`, {
      shipmentIds: orderId,
    });
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, sucess: false };
  }
};

export const getCategoryList = async () => {
  try {
    const res = await services.get("order/business/category");
    return { response: res, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const addShipmentDetail = async (body: any) => {
  try {
    const res = await services.post("order/business/create/single", body);
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, sucess: false };
  }
};

export const addMultipleShipment = async (body: any) => {
  try {
    const res = await services.post("order/business/create/multiple", body);
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, sucess: false };
  }
};

export const addShipmentForm = async (values: any) => {
  try {
    // if (values.orders.length === 1) {
    //   const res = await addShipmentDetail(
    //     values?.source === "bulk"
    //       ? values.orders[0]
    //       : transformPayloadToBackend(values.orders[0])
    //   );
    //   return res;
    // } else {
    //   const body = {
    //     orders:
    //       values?.source === "bulk"
    //         ? values.orders
    //         : values.orders.map((item) => transformPayloadToBackend(item)),
    //   };
    //   const res = await addMultipleShipment(body);
    //   return res;
    // }
    const body = {
      orders:
        values?.source === "bulk"
          ? values.orders
          : values.orders.map((item) => transformPayloadToBackend(item)),
    };
    const res = await addMultipleShipment(body);
    return res;
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return err;
  }
};

export const getOrderDetails = async (orderId: any) => {
  try {
    const res = await services.get(`order/business/shipment/${orderId}`);
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, sucess: false };
  }
};

export const getOrderCountDetail = async (invoiceId: any) => {
  try {
    const res = await services.get(
      `order/business/invoice/${invoiceId}/orderDetails`
    );
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, sucess: false };
  }
};

export const imageUploadService = async (data: any) => {
  try {
    const res = await services.postImage(
      `order/business/uploadDocument`,
      data,
      "order",
      "",
      { "Content-Type": "multipart/form-data; boundary=???" }
    );
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: null, success: false };
  }
};

export const addbulkOrdersFromCSV = async (data: any) => {
  try {
    const res = await services.postImage(
      `order/business/bulk`,
      data,
      "order",
      "",
      { "Content-Type": "multipart/form-data; boundary=???" }
    );
    return { response: res, success: true };
  } catch (err) {
    var fileUrl = null;
    if (err?.message && err?.message.slice(0, 4) === "http") {
      fileUrl = err?.message;
    } else {
      showToast(err?.message || "Something Went Wrong", "error");
    }
    return { response: fileUrl, success: false };
  }
};
