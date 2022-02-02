import Services from "../";
import { toast } from "react-toastify";

export const getDashboardDetails = async () => {
  try {
    const response = (await Services.get(
      `order/business/dashboard`, "order")) as any;
    return { response: response, success: true };
  } catch (err) {
    // toast.error("Something went wrong");    
    return { response: err, success: false };
  }
};
