import Services from "../";

export const signInUserService = async (signInRequest: {
    email: string;
    password: string;
}) => {
    const res = await Services.post("business/login", { password: signInRequest.password, emailId: signInRequest.email }, "user");
    return res;
};

export const forgetPasswordService = async (email: string) => {
    const res = await Services.post("business/forgotPassword", { emailId: email }, "user");
    return res;
};

export const resetPasswordService = async (password: string) => {
    console.log('newPassword', password)
    const res = await Services.post("business/resetPassword", { newPassword: password }, "user");
    return res;
};
