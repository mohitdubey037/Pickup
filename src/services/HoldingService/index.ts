import { buildQueryParams } from "utils/commonUtils";
import Services from "../";

export const getHoldingShipments = async (params={}) => {
    const queryParams = buildQueryParams(params)
    console.log('queryParams', queryParams)
    const type = "order"
    const res = await Services.get(`order/business/shipments/onHold${queryParams}`, type);
    return res;
};
