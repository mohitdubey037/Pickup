import { showToast } from "utils";
import Services from "../";

export const getHoldingShipmentsService = async (urlParams?: string) => {
  try {
    const res = await Services.get(
      `order/business/shipments/onHold?${urlParams}`,
      "order"
    );
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: null, success: false };
  }
};

export const scheduleShipmentService = async (data) => {
  try {
    const res = await Services.post(
      `order/business/shipment/schedule`,
      data,
      "order"
    );
    showToast("Your order's schedule has been successfully updated", "success");
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: null, success: false };
  }
};

export const deleteShipmentService = async (shipmentIds) => {
  try {
    const res = await Services.delete(
      `order/business/shipment`,
      { shipmentIds },
      "order"
    );
    showToast("Your orders has been successfully deleted", "success");
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: null, success: false };
  }
};
