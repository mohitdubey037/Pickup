import { showToast } from "utils";
import Services from "../";

export const getHoldingShipmentsService = async (urlParams?: string) => {
  try {
    const res = await Services.get(
      `order/business/shipments/onHold?${urlParams}`,
      "order"
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const scheduleShipmentService = async (data) => {
  try {
    const res = await Services.post(
      `order/business/shipment/schedule`,
      data,
      "order"
    );
    return { response: res, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
};

export const deleteShipmentService = async (shipmentIds) => {
  try {
    const res = await Services.delete(
      `order/business/shipment`,
      { shipmentIds },
      "order"
    );
    showToast(`Your orders has been successfully deleted`, "success");
    return { response: res, error: null };
  } catch (error) {
    showToast(error.message || `Something Went Wrong`, "error");
    return { response: null, error: error };
  }
};
