import * as yup from "yup";

import { PHONE_NUMBER_REGX, PASSWORD_REGX } from "../../../../../constants";

export const passwordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .matches(PASSWORD_REGX, "Invalid Password")
    .required("Current password is a required field"),
  newPassword: yup
    .string()
    .matches(PASSWORD_REGX, "Invalid Password")
    .required("New password is required field")
    .test("newPassword", "Please enter new password", function (value) {
      return this.parent.currentPassword !== value;
    }),
  newConfirmedPassword: yup
    .string()
    .matches(PASSWORD_REGX, "Invalid Password")
    .required("Confirm password is required field")
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
