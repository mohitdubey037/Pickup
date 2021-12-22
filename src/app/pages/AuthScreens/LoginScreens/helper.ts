import services from "services";

export const recoverPassword = async (values: any) => {
  try {
    const params = { "emailId": values.email};
    const response = await services.post("business/forgotPassword", params);
    return { response: response, success: true };
  } catch (err) {
    return { response: err, success: false };
  }
};
