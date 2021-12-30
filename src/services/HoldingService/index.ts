import { buildQueryParams } from "utils/commonUtils";
import Services from "../";

export const getHoldingShipments = async (params={}) => {
    const queryParams = buildQueryParams(params)
    console.log('queryParams', queryParams)
    const res = await Services.get(`business/shipments/onHold${queryParams}}`);
    return res;
};
