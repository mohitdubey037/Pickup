import * as yup from "yup";
import {
  PHONE_NUMBER_REGEX_NEW,
  PIN_CODE_REGEX,
} from "../../../../../constants";

export const editCompanySchema = yup.object().shape({
  companyName: yup.string().required("Company Name is a required field"),
  address1: yup.string().required("Address Line 1 is a required field"),
  address2: yup.string().required("Address Line 2 is a required field"),
  city: yup.string().required("City is a required field"),
  pincode: yup
    .string()
    .required("Pincode is a required field")
    .matches(PIN_CODE_REGEX, "Please enter valid Pincode"),
  province: yup.string().required("Province is a required field"),
  country: yup.string().required("Country is a required field"),
  hstNumber: yup
    .number()
    .positive("Please enter valid HST Number")
    .min(0, "Please enter valid HST Number")
    .typeError("HST Number must be a number")
    .required(" HST Number is a required field"),
  businessNumber: yup
    .number()
    .positive("Please enter valid Business Number")
    .min(0, "Please enter valid Business Number")
    .typeError("Business Number must be a number")
    .required("Business Number is a required field"),
  industry: yup.string(),
  employeeStrength: yup
    .number()
    .positive("Please enter valid Employee Strength")
    .min(0, "Please enter valid Employee Strength")
    .typeError("Employee Strength must be a number"),
});

export const addNewEditColleagueSchema = yup.object().shape({
  firstName: yup.string().required("First Name is a required field"),
  lastName: yup.string().required("Last Name is a required field"),
  phoneNumber: yup
    .string()
    .required("Phone Number is a required field")
    .matches(PHONE_NUMBER_REGEX_NEW, "Please enter valid Phone Number"),
  roleDesignation: yup
    .string()
    .required("Role/Designation is a required field"),
  emailId: yup
    .string()
    .required("Email Id is a required field")
    .email("Please enter valid Email Id"),
  notification: yup.string(),
  notificationFrequency: yup.string().when("notification", {
    is: (notification) => Number(notification) === 1,
    then: yup.string().required("Notification Frequency is a required field"),
  }),
  permission: yup.string().required("Permission is a required field"),
});
