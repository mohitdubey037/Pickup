import * as yup from "yup";


 const companyProfileSchema = yup.object().shape({
    firstName: yup.string().required("First Name is a required field"),
    lastName: yup.string().required("Last Name is a required field"),
    phoneNumber: yup.string().required("Phone Number is a required field"),
    Role: yup.string().required("Role is a required field"),
    email: yup.string().email().required("Email is a required field"),
    notificationFrequency: yup.string().required("Notification Frequency is a required field"),
    Permission: yup.string().required()
  });

  
  export const companyProfileFormSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    Role: yup.string().required(),
    email: yup.string().required(),
    notificationFrequency: yup.string().required(),
    Permission: yup.string().required()
  });

  export default  companyProfileSchema;