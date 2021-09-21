import { CompanyDetailsType } from "./../../../app/pages/AuthScreens/SignUpScreens/types";
import { Types } from "../SignUpReducer";
export const registerUser = (email) => ({ type: Types.REGISTER_USER, email });
export const setRegisterUserResponse = (res) => ({
  type: Types.REGISTER_USER_RESPONSE,
  res,
});
export const registerCompany = (companyDetails: CompanyDetailsType) => ({
  type: Types.REGISTER_COMPANY,
  companyDetails,
});
export const setCompanyRegisterUserResponse = (res) => ({
  type: Types.REGISTER_COMPANY_RESPONSE,
  res,
});
