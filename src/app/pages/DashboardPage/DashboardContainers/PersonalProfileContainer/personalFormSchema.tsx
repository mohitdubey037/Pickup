import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const personalFormSchema = yup.object().shape({
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  phone: yup
    .string()
    .required("Phone number is a required field")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone number is too short")
    .max(10, "Phone number is too long"),
  emailId: yup
    .string()
    .required("Email is a required field")
    .email("Must be a valid email")
    .max(255),
});
