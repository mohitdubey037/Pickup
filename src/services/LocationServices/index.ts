import { showToast } from "utils";
import Services from "../";

export const getLocationList = async (urlParams: string) => {
  try {
    const res = await Services.get(
      `location/business/location/getsavedLocation?${urlParams}`,
      "location"
    );
    return { response: res, error: null };
  } catch (error) {
    showToast(error.message || "Something Went Wrong", "error");
    return { response: null, error: error };
  }
};

export const deleteSavedLocation = async (locationId: string) => {
  try {
    const res = await Services.delete(
      `location/business/location/${locationId}`,
      "location"
    );
    showToast(`Your location has been successfully deleted`, "success");
    return { response: res, error: null };
  } catch (error) {
    showToast(error.message || "Something Went Wrong", "error");
    return { response: null, error: error };
  }
};
