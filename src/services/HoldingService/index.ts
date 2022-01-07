import { buildQueryParams } from "utils/commonUtils";
import Services from "../";

export const getHoldingShipmentsService = async (params={}) => {
    try {
        const queryParams = buildQueryParams(params)
        const type = "order"
        const res = await Services.get(`order/business/shipments/onHold${queryParams}`, type);
        return {response: res, error: null};
    } catch (error) {
        return {response: null, error: error};
    }
};

export const scheduleShipmentService = async (data) => {
    try {
        const res = await Services.post(`order/business/shipment/schedule`, data, "order");
        return {response: res, error: null};
    } catch (error) {
        return {response: null, error: error};
    }
};

export const deleteShipmentService = async (shipmentId) => {
    try {
        const res = await Services.delete(`order/business/shipment/${shipmentId}`, "order");
        return {response: res, error: null};
    } catch (error) {
        return {response: null, error: error};
    }
};



