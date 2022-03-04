import { showToast } from "utils";
import Services from "../";

export const getLocationList = async (urlParams: string) => {
  try {
    const res = await Services.get(
      `location/business/location/getsavedLocation?${urlParams}`,
      "location"
    );
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: null, success: false };
  }
};

export const updateSavedLocation = async (locationId: string, body: any) => {
  try {
    const res = await Services.put(
      `location/business/location/${locationId}`,
      body,
      "location"
    );
    showToast("Your location has been successfully updated", "success");
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: null, success: false };
  }
};

export const deleteSavedLocation = async (locationId: string) => {
  try {
    const res = await Services.delete(
      `location/deleteSaved/${locationId}`,
      {},
      "location"
    );
    showToast("Your location has been successfully deleted", "success");
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: null, success: false };
  }
};

export const addLocationsFromCSV = async (data: any) => {
  try {
    const res = await Services.postImage(
      `location/business/location/bulk`,
      data,
      "location",
      "",
      { "Content-Type": "multipart/form-data; boundary=???" }
    );
    showToast("Your locations has been successfully added", "success");
    return { response: res, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: null, success: false };
  }
};
