import { CompanyDetailsType } from "./../../app/pages/AuthScreens/SignUpScreens/types";
import Services from "../";
import axios from "axios";
import { USER_BASE_URL } from "../../constants";

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

export const getTermsAndConditions = async (name: string) => {
  try {
  //   const response = await Services.get(`legaldocs/pageforApp/${id}/3`, "user");
  //   return { response: response, success: true };
  // } catch (err) {
  //   return { response: err, sucess: false }; 
  // ${USER_BASE_URL}legaldocs/pageforApp/2
    let key = 2;
    if(name === "policies"){
      key = 1;
    }
    const response = await axios.get(`https://staging-api.pickups.mobi/user/or1.0/v1/legaldocs/pageforApp/${key}`, {
      headers: {
          'Content-Type': 'application/json',
          'User-Type': 3
      }
    })
    return response;
  }catch(err){
  return { response: err, success: false };
}}
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
