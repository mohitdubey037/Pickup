import * as yup from "yup";
import { PHONE_NUMBER_REGX } from "../../../../../constants";

export const SingleShipmentFormSchema = yup.object().shape({
  OrigincompanyName: yup.string().required(),
  OriginfirstName: yup.string().required(),
  OriginlastName: yup.string().required(),
  OriginaddressLine1: yup.string().required(),
  OriginaddressLine2: yup.string().required(),
  Origincity: yup.string().required(),
  OriginpostalCode: yup.string().required(),
  OriginprovinceState: yup.string().required(),
  Origincountry: yup.string().required(),
  OrigincontactNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  OriginalternateNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  OriginemailAddress: yup.string().required().email(),
  OriginadditionalNotes: yup.string().required(),

  DestinationcompanyName: yup.string().required(),
  DestinationfirstName: yup.string().required(),
  DestinationlastName: yup.string().required(),
  DestinationaddressLine1: yup.string().required(),
  DestinationaddressLine2: yup.string().required(),
  Destinationcity: yup.string().required(),
  DestinationpostalCode: yup.string().required(),
  DestinationprovinceState: yup.string().required(),
  Destinationcountry: yup.string().required(),
  DestinationcontactNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  DestinationalternateNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  DestinationemailAddress: yup.string().required().email(),
  DestinationadditionalNotes: yup.string().required(),
  Category: yup.string().required(),
  ShipmentWeight: yup.string().required(),
  Length: yup.string().required(),
  Width: yup.string().required(),
  Height: yup.string().email().required(),
  Pieces: yup.string().required(),
  ShipmentCost: yup.string().required(),
  // Pieces: yup.string().required(),
  ShipmentDescription: yup.string().required(),
  shipmentTime: yup.string().required(),
  shipmentDate: yup.string().required(),
  whatToDo: yup.string().required(),

  shipementDeatials: yup.array().of(
    yup.object({
      ShipmentWeight: yup.string().required(),
      Length: yup.string().required(),
      Height: yup.string().email().required(),
      Pieces: yup.string().required(),
      ShipmentDescription: yup.string().required(),

    })
  ),
});
