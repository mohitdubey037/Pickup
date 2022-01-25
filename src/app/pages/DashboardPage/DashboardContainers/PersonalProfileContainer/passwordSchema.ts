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
    .required("New Password is required"),
  newConfirmedPassword: yup
    .string()
    .matches(PASSWORD_REGX, "Invalid Password")
    .required("New Confirm Password is required")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
  // }),
});
