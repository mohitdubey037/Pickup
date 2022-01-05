import { buildQueryParams } from "utils/commonUtils";
import Services from "../";

export const getHoldingShipments = async (params={}) => {

    try {
        const queryParams = buildQueryParams(params)
        const type = "order"
        const res = await Services.get(`order/business/shipments/onHold${queryParams}`, type);
        return {response: res, error: null};
    } catch (error) {
        return {response: null, error: error};
    }
};
