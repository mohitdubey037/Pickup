import * as yup from "yup";
import { PHONE_NUMBER_REGEX_NEW, PIN_CODE_REGEX } from "../../../../../constants";

export const ChildAccountSchema = yup.object().shape({
    companyName: yup.string().required("Company Name is a required field"),
    businessNumber: yup
    .number()
    .positive("Please enter valid Business Number")
    .min(0, "Please enter valid Business Number")
    .typeError("Business Number must be a number")
    .required(" Business Number is a required field"),
    industry: yup.string().required("Industry is a required field"),
    employeeStrength: yup.string().required("Employee is a required field"),
    address1: yup.string().required("Address Line 1 is a required field"),
    address2: yup.string().required("Address Line 2 is a required field"),
    pincode: yup.string().required("Pincode is a required field").matches(PIN_CODE_REGEX, "Please enter valid Postal code"),
    province: yup.string().required("Province is a required field"),
    city: yup.string().required("City is a required field"),
    country: yup.string().required("Country is a required field"),

    firstName:yup.string().required('First Name is required field'),
    lastName:yup.string().required('Last Name is required field'),
    phoneNumber: yup.string().required('Phone Number is required field').matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
    role: yup.string().required('Role is required field'),
    emailId: yup.string().required('EmailId is required field').email("Please enter valid email"),

    number: yup.string().required('Card number is required field'),
    expiryYear: yup.string().required("Expiry Date is required field"),
    cvd: yup.string().required('Cvc is required field'),
    name: yup.string().required('Name is required field'),
    // pincard: yup.string().required("Pincard is required field"),
    // nickName: yup.string().notRequired()
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