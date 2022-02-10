import { PHONE_NUMBER_REGEX_NEW } from "../../../../../constants";
import * as yup from "yup";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const personalFormSchema = yup.object().shape({
  // profileImage: yup.string(),
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  phone: yup
    .string()
    .required("Phone number is a required field")
    .matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Phone Number"),
  emailId: yup
    .string()
    .required("Email is a required field")
    .email("Must be a valid email")
    .max(255),
});
