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

export const updateSavedLocation = async (locationId: string, body: any) => {
  try {
    const res = await Services.put(
      `location/business/location/${locationId}`,
      body,
      "location"
    );
    showToast(`Your location has been successfully updated`, "success");
    return { response: res, error: null };
  } catch (error) {
    showToast(error.message || "Something Went Wrong", "error");
    return { response: null, error: error };
  }
};

export const deleteSavedLocation = async (locationId: string) => {
  try {
    const res = await Services.delete(
      `location/deleteSaved/${locationId}`,
      {},
      "location"
    );
    showToast(`Your location has been successfully deleted`, "success");
    return { response: res, error: null };
  } catch (error) {
    showToast(error.message || "Something Went Wrong", "error");
    return { response: null, error: error };
  }
};
