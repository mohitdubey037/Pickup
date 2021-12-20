import * as yup from "yup";

import { PHONE_NUMBER_REGX,PASSWORD_REGX } from "../../../../constants";

export const signUpSchema = yup.object().shape({
  email: yup.string().required("Email is a required field").email(),
});

export const companyDetailsSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  companyName: yup.string().required(),
  email: yup.string().required("Email is a required field").email(),
  phoneNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
});

export const passwordSchema = yup.object().shape({
  password: yup.string().matches(PASSWORD_REGX,"Invalid Password").required(),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
