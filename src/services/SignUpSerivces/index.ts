import { CompanyDetailsType } from "./../../app/pages/AuthScreens/SignUpScreens/types";
import Services from "../";

export const registerUserService = async (email: string) => {
  const res = await Services.post("business/sign_up", { emailId: email }, "user");
  return res;
};

export const registerCompanyService = async (companyDetails: CompanyDetailsType) => 
    await Services.post("business/create", companyDetails, "user");

export const registerPasswordService = async (passwordRequest: {
  emailId: string;
  password: string;
}) => await Services.post("business/password", passwordRequest, "user");

export const getEmailUserId = async (userId) => {
  const res = (await Services.get(`user/${userId}/profile`)) as {
    data: { data: { emailId: string } };
  };
  return res.data?.data;
};

// export const SendSignUpDetails = async (values: any) => {
//   try {
//     const params = {
//       "firstName": values.firstName,
//       "lastName": values.lastName,
//       "companyName": values.companyName,
//       "emailId": values.emailId,
//       "phoneNumber": values.phoneNumber,
//     };
//     const response = await Services.post("business/create", params);
//     return {response: response, success: true}
//   } catch (err) {
//     return { data: err, success: false };
//   }
// };
