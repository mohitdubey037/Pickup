import * as yup from "yup";
import { PHONE_NUMBER_REGEX_NEW } from "../../../../../constants";

export const personalFormSchema = yup.object().shape({
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  phone: yup
    .string()
    .required("Phone Number is a required field")
    .matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Phone Number"),
  emailId: yup
    .string()
    .required("Email is a required field")
    .email("Please enter valid Email")
    .max(255),
});
