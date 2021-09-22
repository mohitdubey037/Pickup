import Services from "services";

export const signInUserService = async (signInRequest: {
  email: string;
  password: string;
}) => {
  console.log(signInRequest)
  const res = await Services.post("login", {password:signInRequest.password,emailId:signInRequest.email}, "user");
  return res;
};
