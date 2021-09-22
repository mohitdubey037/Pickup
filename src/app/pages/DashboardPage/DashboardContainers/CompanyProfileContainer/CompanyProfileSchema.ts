import * as yup from "yup";


 const companyProfileSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    Role: yup.string().required(),
    email: yup.string().email().required(),
    notificationFrequency: yup.string().required(),
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