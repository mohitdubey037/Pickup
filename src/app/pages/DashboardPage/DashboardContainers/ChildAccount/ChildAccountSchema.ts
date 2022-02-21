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
    employeeStrength: yup
    .number()
    .positive("Please enter valid Employee Strength")
    .min(0, "Please enter valid Employee Strength")
    .typeError("Employee Strength must be a number"),
    addressLine1: yup.string().required("Address Line 1 is a required field"),
    addressLine2: yup.string().required("Address Line 2 is a required field"),
    pincode: yup.string().required("Pincode is a required field").matches(PIN_CODE_REGEX, "Please enter valid Postal code"),
    province: yup.string().required("Province is a required field"),
    city: yup.string().required("City is a required field"),
    country: yup.string().required("Country is a required field"),

    firstName:yup.string().required('First Name is required field'),
    lastName:yup.string().required('Last Name is required field'),
    phoneNumber: yup.string().required('Phone Number is required field').matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
    roleId: yup.string().required('Role is required field'),
    emailId: yup.string().required('EmailId is required field').email("Please enter valid email"),

    number: yup
    .string()
    .required("Card number is a required field")
    .matches(
        /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/,
        "Enter a valid card number"
    ),
    expiryDate: yup
    .string()
    .required("Expiry date is a required field")
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Enter a valid expiry date"),
    cvd: yup
    .string()
    .required("CVC is a required field")
    .min(3, "CVC must be atleast 3 digits")
    .max(4),
    name: yup.string().required('Name is required field'),
    // pincard: yup.string().required("Pincard is required field"),
    // nickName: yup.string().notRequired()
  });

  
  export const editChildAccountSchema = yup.object().shape({
    companyName: yup.string().required("Company Name is a required field"),
    businessNumber: yup
    .number()
    .positive("Please enter valid Business Number")
    .min(0, "Please enter valid Business Number")
    .typeError("Business Number must be a number")
    .required(" Business Number is a required field"),
    industry: yup.string().required("Industry is a required field"),
    employeeStrength: yup
    .number()
    .positive("Please enter valid Employee Strength")
    .min(0, "Please enter valid Employee Strength")
    .typeError("Employee Strength must be a number")
    .required("Employess Strength is a required field"),
    addressLine1: yup.string().required("Address Line 1 is a required field"),
    addressLine2: yup.string().required("Address Line 2 is a required field"),
    pincode: yup.string().required("Pincode is a required field").matches(PIN_CODE_REGEX, "Please enter valid Postal code"),
    province: yup.string().required("Province is a required field"),
    city: yup.string().required("City is a required field"),
    country: yup.string().required("Country is a required field"),
  });

  export const editSuperindedentDataSchema = yup.object().shape({
    firstName:yup.string().required('First Name is required field'),
    lastName:yup.string().required('Last Name is required field'),
    phoneNumber: yup.string().required('Phone Number is required field').matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Contact Number"),
    roleDesignation: yup.string().required('Role is required field'),
    emailId: yup.string().required('EmailId is required field').email("Please enter valid email"),
  });