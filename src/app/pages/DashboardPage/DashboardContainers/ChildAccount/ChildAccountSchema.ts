import * as yup from "yup";

export const ChildAccountSchema = yup.object().shape({
    CompanyName: yup.string().required(),
    BusinessNumber: yup.string().required(),
    Industry: yup.string().required(),
    Employee: yup.string().required(),
    AddressLine1: yup.string().required(),
    AddressLine2: yup.string().required(),
    Pincode: yup.string().required(),
    Province: yup.string().required(),
    City: yup.string().required(),
    Country: yup.string().required(),
  });

  
  export const ChildAccountDetailsSchema = yup.object().shape({
    CompanyName: yup.string().required(),
    BusinessNumber: yup.string().required(),
    Industry: yup.string().required(),
    Employee: yup.string().required(),
    AddressLine1: yup.string().required(),
    AddressLine2: yup.string().required(),
    Pincode: yup.string().required(),
    Province: yup.string().required(),
    City: yup.string().required(),
    Country: yup.string().required()

  });
  export default ChildAccountSchema;