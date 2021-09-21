import * as yup from "yup";
import { PHONE_NUMBER_REGX } from "../../../../constants";

export const signUpSchema = yup.object().shape({
  email: yup.string().required().email(),
});

export const companyDetailsSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  companyName: yup.string().required(),
  email: yup.string().required().email(),
  phoneNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
});
