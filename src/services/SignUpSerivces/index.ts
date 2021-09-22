import { CompanyDetailsType } from "./../../app/pages/AuthScreens/SignUpScreens/types";
import Services from "../";

export const registerUserService = async (email: string) => {
  const res = await Services.post("sign_up", { emailId: email });
  return res;
};

export const registerCompanyService = async (
  companyDetails: CompanyDetailsType
) =>
  await Services.post("create", {
    ...companyDetails,
    emailId: companyDetails.email,
  });

export const registerPasswordService = async (passwordRequest: {
  emailId: string;
  password: string;
}) => await Services.post("password", passwordRequest);


export const getEmailUserId = async (userId) => {
  const res = (await Services.get(`user/${userId}/profile`)) as {
    data: { data: { emailId: string } };
  };
  return res.data?.data;
};
