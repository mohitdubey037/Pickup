import * as yup from "yup";

export const ChildAccountSchema = yup.object().shape({
    CompanyName: yup.string().required("Company Name is a required field"),
    BusinessNumber: yup.string().required("Business Number is a required field"),
    Industry: yup.string().required("Industry is a required field"),
    Employee: yup.string().required("Employee is a required field"),
    AddressLine1: yup.string().required("Address Line 1 is a required field"),
    AddressLine2: yup.string().required("Address Line 2 is a required field"),
    Pincode: yup.string().required("Pincode is a required field"),
    Province: yup.string().required("Province is a required field"),
    City: yup.string().required("City is a required field"),
    Country: yup.string().required("Country is a required field"),
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