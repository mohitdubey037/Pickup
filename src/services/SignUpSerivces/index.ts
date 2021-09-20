import Services from "services";

export const registerUserService = async (email: string) => {
  const res = await Services.post("sign_up", { emailId: email });
  return res;
};
