import * as yup from "yup";

export const AdminDetailsSchema = yup.object().shape({
  FirstName: yup.string().required("First Name is a required field"),
  LastName: yup.string().required("Last Name is a required field"),
  PhoneNumber: yup.string().required("Phone Number is a required field"),
  Role: yup.string().required("Role is a required field"),
  Email: yup.string().email().required("Email is a required field"),
});

export const AdminSchema = yup.object().shape({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
  PhoneNumber: yup.string().required(),
  Role: yup.string().required(),
  Email: yup.string().email().required(),
});
export default AdminDetailsSchema;
