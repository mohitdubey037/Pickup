import { showToast } from "utils";
import Services from "../";

export const getDashboardDetails = async () => {
  try {
    const res = await Services.get("order/business/dashboard", "order");
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};
