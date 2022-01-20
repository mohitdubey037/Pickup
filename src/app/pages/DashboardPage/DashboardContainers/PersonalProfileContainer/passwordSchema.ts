import * as yup from "yup";

export const passwordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Current Password is a required field"),
  newpassword: yup.string().required("New Password is required"),
  // newConfirmedPassword: yup
  //   .string()
  //   .oneOf(
  //     [yup.ref("newpassword"), null],
  //     "New Password and Confirm Password must match"
  //   ),
  newConfirmedPassword: yup
    .string()
    .oneOf([yup.ref("newpassword"), null], "Passwords must match")
    .required("Passwords must match"),
});