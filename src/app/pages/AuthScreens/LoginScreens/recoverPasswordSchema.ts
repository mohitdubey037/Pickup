import * as yup from "yup";

export const recoverPasswordSchema = yup.object().shape({
    password: yup.string().required(),
    confirmpassword: yup.string().required()
  });
  export const companyDetailsSchema = yup.object().shape({
    password: yup.string().required(),
    confirmpassword: yup.string().required()
  });