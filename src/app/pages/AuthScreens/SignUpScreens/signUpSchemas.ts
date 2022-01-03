import * as yup from "yup";

import { PHONE_NUMBER_REGX,PASSWORD_REGX } from "../../../../constants";

export const signUpSchema = yup.object().shape({
  email: yup.string().required("Email is a required field").email("Please enter a valid email")
});

export const companyDetailsSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  companyName: yup.string().required("Company name is required"),
  consent: yup.boolean().required("Please agree to terms and policies").equals([true]),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
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
