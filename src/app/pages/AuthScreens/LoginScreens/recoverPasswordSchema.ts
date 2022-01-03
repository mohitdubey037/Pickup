import * as yup from "yup";

export const recoverPasswordSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    confirmpassword: yup.string().required("Confirm password is required")
});