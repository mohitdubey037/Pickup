import { PHONE_NUMBER_REGX } from "../../../../../constants";
import * as yup from "yup";

const companyProfileSchema = yup.object().shape({
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  phoneNumber: yup
    .string()
    .required("Phone number is not valid")
    .min(10, "Minimum 10 digits allowed")
    .max(10, "Maximum 10 digits allowed")
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  Role: yup.string().required("Role is a required field"),
  email: yup.string().email().required("Email is a required field"),
  notificationFrequency: yup
    .string()
    .required("Notification Frequency is a required field"),
  Permission: yup.string().required(),
});

const newColleagueSchema = yup.object().shape({
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  phoneNumber: yup.string().required("Phone Number is a required field"),
  roleDesignation: yup.string().required("Role is a required field"),
  email: yup.string().email().required("Email is a required field"),
  notificationFrequency: yup
    .string()
    .required("Notification Frequency is a required field"),
  Permission: yup.string().required(),
});

export const editCompanySchema = yup.object().shape({
  companyName: yup.string().required(" Company Name is a required field"),
  businessNumber: yup
    .number()
    .positive("Please enter valid Business Number")
    .min(0, "Please enter valid Business Number")
    .typeError("Business Number must be a number")
    .required(" Business Number is a required field"),
  industry: yup.string().required(" Industry is a required field"),
  employeeStrength: yup
    .number()
    .positive("Please enter valid Employee Strength")
    .min(0, "Please enter valid Employee Strength")
    .typeError("Employee Strength must be a number")
    .required(" Employee Strength is a required field"),
  address1: yup.string().required(" Address Line 1 is a required field"),
  address2: yup.string().required(" Address Line 2 is a required field"),
  city: yup.string().required(" City is a required field"),
  pincode: yup
    .number()
    .positive("Please enter valid Pincode")
    .min(0, "Please enter valid Pincode")
    .typeError("Pincode must be a number")
    .required(" Pincode is a required field"),
  province: yup.string().required(" Province is a required field"),
  country: yup.string().required(" Country is a required field"),
  hstNumber: yup
    .number()
    .positive("Please enter valid HST Number")
    .min(0, "Please enter valid HST Number")
    .typeError("HST number must be a number")
    // .test(
    //   "maxDigitsAfterDecimal",
    //   "Please enter non-decimal number",
    //   function (number: any) {
    //     if (/^[0-9\b]+$/.test(number)) {
    //       console.log(/^[0-9\b]+$/.test(number));
    //       return false;
    //     } else {
    //       console.log(/^[0-9\b]+$/.test(number));
    //       return true;
    //     }
    //   }
    // )
    .required(" HST Number is a required field"),
});

export const addNewColleague = yup.object().shape({
  firstName: yup.string().required(" First Name is a required field"),
  lastName: yup.string().required(" Last Name is a required field"),
  phoneNumber: yup
    .string()
    .required("Phone number is not valid")
    .min(10, "Minimum 10 digits allowed")
    .max(10, "Maximum 10 digits allowed")
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  roleDesignation: yup
    .string()
    .required(" Role/Designation is a required field"),
  notification: yup.string(),
  emailId: yup.string().email().required("Email Id is a required field"),
  notificationFrequency: yup.string().when("notification", {
    is: (notification) => notification == "1",
    then: yup.string().required("Notification frequency is required field"),
  }),
  permission: yup.string().required(" Permission is a required field"),
  // type: yup.string().required(" Company Name is a required field"),
});

export const editColleagueSchema = yup.object().shape({
  firstName: yup.string().required(" First Name is a required field"),
  lastName: yup.string().required(" Last Name is a required field"),
  phoneNumber: yup
    .string()
    .required("Phone number is not valid")
    .min(10, "Minimum 10 digits allowed")
    .max(10, "Maximum 10 digits allowed")
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  roleDesignation: yup
    .string()
    .required(" Role/Designation is a required field"),
  emailId: yup.string().email().required("Email Id is a required field"),
  notificationFrequency: yup
    .string()
    .required(" Notification Frequency is a required field"),
  // permission: yup.string().required(" Permission is a required field"),
  // notification: yup.string().required(" Company Name is a required field"),
  // type: yup.string().required(" Company Name is a required field"),
});

export const companyProfileFormSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup
    .string()
    .required("Phone number is not valid")
    .min(10, "Minimum 10 digits allowed")
    .max(10, "Maximum 10 digits allowed")
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  Role: yup.string().required(),
  email: yup.string().required(),
  notificationFrequency: yup.string().required(),
  Permission: yup.string().required(),
});

export default companyProfileSchema;
