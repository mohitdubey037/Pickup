import services from "../";
import { showToast } from "utils";

export const getPersonalProfileDetails = async (userId: number) => {
  try {
    const response = await services.get(
      `business/user/${userId}/profile`,
      "user"
    );
    return { response: response, success: true };
  } catch (err) {
    return { response: err, sucess: false };
  }
};

export const editPersonalProfileDetails = async (values: {
  emailId: string;
  firstName: string;
  lastName: string;
  phone: string;
}) => {
  try {
    const response: any = await services.patch(
      `business/edit_personal_details`,
      {
        emailId: values?.emailId,
        fName: values?.firstName,
        lName: values?.lastName,
        phoneNumber: values?.phone,
        // notificationFrequency: "SomeThingString",
        // notification: 1,
        // roleDesignation: "super",
      },
      "user_cr"
    );
    showToast(response.data.message, "success");
    return { response: response, success: true };
  } catch (err) {
    showToast(err.message, "error");
    return { response: err, sucess: false };
  }
};

export const changeProfilePassword = async (values: {
  currentPassword: string;
  newPassword: string;
}) => {
  try {
    const response: any = await services.post(
      `business/changePassword`,
      {
        newPassword: values.newPassword,
        tempPassword: values.currentPassword,
      },
      "user_cr"
    );
    showToast(response.data.message, "success");
    return { response: response, success: true };
  } catch (err) {
    showToast(err.message, "error");
    return { response: err, sucess: false };
  }
};
