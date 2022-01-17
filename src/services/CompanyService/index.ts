import services from "../";
import { showToast } from "utils";

export const fetchCompanyDetails = async () => {
  try {
    const response = await services.get(
      `business/user/fetchCompanyDetails`,
      "user"
    );
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const fetchUserAdmin = async () => {
  try {
    const response = await services.get(
      `business/user/fetchUserAdmin`,
      "user"
    );
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};