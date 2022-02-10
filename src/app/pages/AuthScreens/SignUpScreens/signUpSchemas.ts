import * as yup from "yup";

import {
  PHONE_NUMBER_REGEX_NEW,
  NEWPASSWORD_REGEX,
  EMAIL_REGEX,
} from "../../../../constants";

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required field")
    .matches(EMAIL_REGEX, "Email is not valid"),
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
    .matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Phone Number"),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(NEWPASSWORD_REGEX, "The password you entered is incorrect")
    .required("Password is required field"),
  confirmPassword: yup
    .string()
    .test("asswords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
