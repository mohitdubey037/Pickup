import * as yup from "yup";

export const AdminDetailsSchema = yup.object().shape({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
  PhoneNumber: yup.string().required(),
  Role: yup.string().required(),
  Email: yup.string().email().required(),
});

export const AdminSchema = yup.object().shape({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
  PhoneNumber: yup.string().required(),
  Role: yup.string().required(),
  Email: yup.string().email().required(),
});
export default AdminDetailsSchema;
