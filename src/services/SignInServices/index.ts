import Services from "../";

export interface resetPassword {
    password: string;
    token: string;
}

export const signInUserService = async (signInRequest: {
    email: string;
    password: string;
    checked: boolean
}) => {
    const res = await Services.post("business/login", { password: signInRequest.password, emailId: signInRequest.email, checked: signInRequest.checked }, "user");
    return res;
};

export const forgetPasswordService = async (email: string) => {
    const res = await Services.post("business/forgotPassword", { emailId: email }, "user");
    return res;
};

export const resetPasswordService = async (resetPassword: resetPassword) => {
    const res = await Services.post("business/resetPassword", { newPassword: resetPassword.password }, "user", resetPassword.token);
    console.log(res, 'service');
    return res;
};
