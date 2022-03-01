import * as yup from "yup";
import {
  NEWPASSWORD_REGEX,
  PHONE_NUMBER_REGEX_NEW,
} from "../../../../../constants";

export const editPersonalProfileSchema = yup.object().shape({
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  phone: yup
    .string()
    .required("Phone Number is a required field")
    .matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Phone Number"),
  emailId: yup
    .string()
    .required("Email Id is a required field")
    .email("Please enter valid Email Id"),
});

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .matches(NEWPASSWORD_REGEX, "Invalid Password")
    .required("Current Password is a required field"),
  newPassword: yup
    .string()
    .matches(NEWPASSWORD_REGEX, "Invalid Password")
    .required("New Password is a required field")
    .test("newPassword", "New Password must be different", function (value) {
      return this.parent.currentPassword !== value;
    }),
  newConfirmedPassword: yup
    .string()
    .matches(NEWPASSWORD_REGEX, "Invalid Password")
    .required("Confirm Password is a required field")
    .oneOf(
      [yup.ref("newPassword"), null],
      "New Password and Confirm Password must match"
    )
    .test(
      "newConfirmedPassword",
      "New Password must be different",
      function (value) {
        return this.parent.currentPassword !== value;
      }
    ),
});
