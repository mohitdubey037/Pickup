import * as yup from "yup";
import { PHONE_NUMBER_REGX } from "../../../../../constants";

export const AdvanceFilterFormSchema = yup.object().shape({
  from_shipping: yup.date(),
  to_shipping: yup.date(),
  status: yup.string(),
  origin_city: yup.string(),
  origin_postal_code: yup.string(),
  origin_province_state: yup.string(),
  origin_country: yup.string(),
  origin_email: yup.string().email("Please enter valid email"),
  destination_city: yup.string(),
  destination_postal_code: yup.string(),
  destination_province_state: yup.string(),
  destination_country: yup.string(),
  destination_email: yup.string().email("Please enter valid email"),
  destination_company_name: yup.string(),
  weight: yup.string(),
  weight_value: yup.string(),
  weight_unit: yup.string(),
  volume: yup.string(),
  volume_value: yup.string(),
  volume_unit: yup.string(),
  category: yup.string(),
});
