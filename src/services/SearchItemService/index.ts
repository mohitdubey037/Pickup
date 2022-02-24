import { showToast } from "utils";
import Service from "../";

export const getTrackStatus = async (orderId: number) => {
  try {
    const response = await Service.get(
      `order/business/shipment/${orderId}/track`,
      "order"
    );
    // const response = await
    // fetch(
    //   `https://staging-api.pickups.mobi/order/api/order/business/shipment/${orderId}/track`,
    //   {
    //     headers: {
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMTgxLCJ0eXBlIjoibG9naW4iLCJyb2xlIjoxNywiaWF0IjoxNjI4NTA3ODUzfQ.nmXM8_mkHwehZIFi7XX6_g8tR2o4l3EPsUufRIXQpLM"
    //     },
    //   }
    // ).then(res => res.json());
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const getLocation = async (orderId: number) => {
  try {
    const response = await Service.get(
      `order/business/shipment/${orderId}/liveLocation`,
      "order"
    );
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const getSearchOrderList = async (urlParams?: string) => {
  try {
    let api = `order/business/shipments?${urlParams}`;
    const response = await Service.get(api, "order");
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const getSearchOrderListById = async (orderId: number) => {
  try {
    const response = await Service.get(
      `order/business/shipment/${orderId}`,
      "order"
    );
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const getAdvancedFilter = async () => {
  try {
    const response = await Service.get(
      `order/business/shipment/adavanceFilters/get`,
      "order"
    );
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const saveAdvancedFilters = async (data: any) => {
  try {
    const response = await Service.post(
      `order/business/shipment/adavanceFilters`,
      data,
      "order"
    );
    showToast(`Successfully applied advanced filters`, "success");
    return { response: response, success: true };
  } catch (err) {
    showToast(err.message || "Something Went Wrong", "error");
    return { response: err, sucess: false };
  }
};

export const deleteAdvancedFilter = async () => {
  try {
    const response = await Service.get(
      `order/business/shipment/adavanceFilters/clear`,
      "order"
    );
    showToast(`Successfully removed advanced filters`, "success");
    return { response: response, success: true };
  } catch (err) {
    showToast(err.message || "Something Went Wrong", "error");
    return { response: err, sucess: false };
  }
};
