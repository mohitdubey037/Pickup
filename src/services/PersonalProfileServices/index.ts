import { showToast } from "utils";
import services from "../";

export const getPersonalProfileDetails = async (userId: number | undefined) => {
  try {
    const response = await services.get(
      `v1/api/business/user/${userId}/profile`,
      "user_cr"
    );
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};

export const editPersonalProfileDetails = async (values: {
  emailId: string;
  firstName: string;
  lastName: string;
  phone: string;
  profileImage: string;
}) => {
  try {
    const response: any = await services.patch(
      `business/edit_personal_details`,
      {
        emailId: values?.emailId,
        fName: values?.firstName,
        lName: values?.lastName,
        phoneNumber: values?.phone,
        profileImage: values?.profileImage,
      },
      "user_cr"
    );
    showToast("Your personal details has been successfully updated", "success");
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};

export const changeProfilePassword = async (values: {
  currentPassword: string;
  newPassword: string;
  newConfirmedPassword: string;
}) => {
  try {
    const response: any = await services.post(
      `business/changePassword`,
      {
        newPassword: values.newPassword,
        currentPassword: values.currentPassword,
        confirmPassword: values.newConfirmedPassword,
      },
      "user_cr"
    );
    showToast("Your password has been successfully changed", "success");
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};
