import Services from "services";

export const registerUserService = async (email: string) => {
  try {
    const res = await Services.post("sign_up", { emailId: email });
    return res;
  } catch (err) {
    return err.messages;
  }
};
