import * as yup from "yup";
import { PHONE_NUMBER_REGX } from "../../../../../constants";

export const SingleShipmentFormSchema = yup.object().shape({
  companyName: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  addressLine1: yup.string().required(),
  addressLine2: yup.string().required(),
  city: yup.string().required(),
  postalCode: yup.string().required(),
  provinceState: yup.string().required(),
  country: yup.string().required(),
  contactNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  alternateNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  emailAddress: yup.string().required().email(),
  additionalNotes: yup.string().required(),
});
