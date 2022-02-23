import * as yup from "yup";
import { NEWPASSWORD_REGEX } from "../../../../../constants";

export const passwordSchema = yup.object().shape({
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
