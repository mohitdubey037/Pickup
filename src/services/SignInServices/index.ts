import Services from "../";

export const signInUserService = async (signInRequest: {
  email: string;
  password: string;
}) => {
   const res = await Services.post("login", {password:signInRequest.password,emailId:signInRequest.email}, "user");
    return res;

};
