import * as yup from "yup";

import { PHONE_NUMBER_REGX, PASSWORD_REGX } from "../../../../../constants";

export const passwordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .matches(PASSWORD_REGX, "Invalid Password")
    .required("Current Password is a required field"),
  newPassword: yup
    .string()
    .matches(PASSWORD_REGX, "Invalid Password")
    .required("New Password is required")
    .test("newPassword", "Please enter new password", function (value) {
      return this.parent.currentPassword !== value;
    }),
  newConfirmedPassword: yup
    .string()
    .matches(PASSWORD_REGX, "Invalid Password")
    .required("New Confirm Password is required")
    .oneOf(
      [yup.ref("newPassword"), null],
      "New Password and Confirm Password must match"
    )
    .test(
      "newConfirmedPassword",
      "Please enter new password",
      function (value) {
        return this.parent.currentPassword !== value;
      }
    ),
  // }),
});
