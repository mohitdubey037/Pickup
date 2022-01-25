import * as yup from "yup";

import { PHONE_NUMBER_REGX, PASSWORD_REGX } from "../../../../constants";

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Please enter a valid email"),
});

export const companyDetailsSchema = yup.object().shape({
  firstName: yup.string().required("First name is required field"),
  lastName: yup.string().required("Last name is required field"),
  companyName: yup.string().required("Company name is required field"),
  consent: yup
    .boolean()
    .required("Please agree to terms and policies")
    .equals([true]),
  phoneNumber: yup
    .string()
    .required("Phone number is required field")
    .max(10, "Phone number should not be greater than 10 digit")
    .min(10, "Phone number should not be less than 10 digit")
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
});

export const passwordSchema = yup.object().shape({
  password: yup.string().matches(PASSWORD_REGX, "The password you entered is incorrect").required('Password is required field'),
  confirmPassword: yup
    .string()
    .test("asswords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
