import Services from "services";

export const recoverPassword = async (values: any) => {
  try {
    const params = { "emailId": values.email};
    const response = await Services.post("business/forgotPassword", params, "user");
    return { response: response, success: true };
  } catch (err) {
    return { response: err, success: false };
  }
};
