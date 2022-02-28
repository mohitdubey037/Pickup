import services from "../";
import { showToast } from "utils";

export const fetchCompanyDetails = async () => {
  try {
    const response = await services.get(
      `v1/api/business/fetchCompanyDetails`,
      "user_cr"
    );
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};

export const fetchUserAdmin = async () => {
  try {
    const response = await services.get(
      `v1/api/business/fetchUserAdmin`,
      "user_cr"
    );
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};

export const fetchColleagues = async () => {
  try {
    const response = await services.get(`business/inviteColleague`, "user_cr");
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};

export const updateCompanyProfile = async (values: {
  companyId: string;
  address1: string;
  address2: string;
  businessNumber: number;
  city: string;
  companyName: string;
  country: string;
  employeeStrength: number;
  hstNumber: string;
  industry: string;
  pincode: number;
  province: string;
  profileImage: string;
}) => {
  try {
    const response: any = await services.put(
      `business/companyDetails/${values.companyId}`,
      {
        addressLine1: values?.address1,
        addressLine2: values?.address2,
        businessNumber: values?.businessNumber,
        city: values?.city,
        companyName: values?.companyName,
        country: values?.country,
        employeeStrength: values?.employeeStrength,
        hstNumber: values?.hstNumber,
        industry: values?.industry,
        pincode: values?.pincode,
        province: values?.province,
        companyProfileImage: values?.profileImage,
      },
      "user_cr"
    );
    showToast("Your company details has been updated successfully", "success");
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};

export const inviteColleague = async (values: {
  emailId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  roleDesignation: string;
  notificationFrequency: string;
  permission: string;
  notification: string;
  type: number;
  companyId: number;
}) => {
  try {
    const notificationFrequency =
      values?.notificationFrequency !== "" &&
      values?.notificationFrequency !== null
        ? values?.notificationFrequency
        : undefined;
    const response: any = await services.post(
      `business/inviteColleague`,
      {
        emailId: values?.emailId,
        fName: values?.firstName,
        lName: values?.lastName,
        phoneNumber: values?.phoneNumber,
        notificationFrequency,
        roleId: values?.permission,
        roleDesignation: values?.roleDesignation,
        companyId: values?.companyId,
        notification: values?.notification,
        type: values?.type,
      },
      "user_cr"
    );
    showToast("Your new colleague has been added successfully", "success");
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Error in processing request", "error");
    return { response: err, success: false };
  }
};

export const updateColleague = async (values: {
  inviteId: string;
  emailId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: number;
  roleDesignation: string;
  notificationFrequency: string;
  permission: string;
  notification: string;
  type: number;
  companyId: number;
  profileImage: string;
}) => {
  try {
    const response: any = await services.put(
      `business/inviteColleague/${values.inviteId}`,
      {
        emailId: values?.emailId,
        fName: values?.firstName,
        lName: values?.lastName,
        phoneNumber: values?.phoneNumber,
        notificationFrequency: values?.notificationFrequency,
        roleId: values?.role,
        roleDesignation: values?.roleDesignation,
        companyId: values?.companyId,
        notification: values?.notification,
        type: values?.type,
        profileImage: values?.profileImage,
      },
      "user_cr"
    );
    showToast(
      "Your colleague details has been updated successfully",
      "success"
    );
    return { response: response, success: true };
  } catch (err) {
    showToast(err?.message || "Something Went Wrong", "error");
    return { response: err, success: false };
  }
};
