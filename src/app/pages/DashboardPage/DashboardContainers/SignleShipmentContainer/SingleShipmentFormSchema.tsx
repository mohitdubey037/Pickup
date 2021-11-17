import * as yup from "yup";
import { PHONE_NUMBER_REGX } from "../../../../../constants";

export const SingleShipmentFormSchema = yup.object().shape({
  OrigincompanyName: yup.string().required("Company Name is a required field"),
  OriginfirstName: yup.string().required("First Name is a required field"),
  OriginlastName: yup.string().required("Last Name is a required field"),
  OriginaddressLine1: yup.string().required("Address Line 1 is a required field"),
  OriginaddressLine2: yup.string().required("Address Line 2 is a required field"),
  Origincity: yup.string().required("City is a required field"),
  OriginpostalCode: yup.string().required("Postal Code is a required field"),
  OriginprovinceState: yup.string().required("Province/State is a required field"),
  Origincountry: yup.string().required("Country is a required field"),
  OrigincontactNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  OriginalternateNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  OriginemailAddress: yup.string().required("Email Address is a required field").email(),
  OriginadditionalNotes: yup.string().required("Additional Notes is a required field"),

  DestinationcompanyName: yup.string().required("Company Name is a required field"),
  DestinationfirstName: yup.string().required("First Name is a required field"),
  DestinationlastName: yup.string().required("Last Name is a required field"),
  DestinationaddressLine1: yup.string().required("Address Line 1 is a required field"),
  DestinationaddressLine2: yup.string().required("Address Line 2 is a required field"),
  Destinationcity: yup.string().required("City is a required field"),
  DestinationpostalCode: yup.string().required("Postal Code is a required field"),
  DestinationprovinceState: yup.string().required("Province/State is a required field"),
  Destinationcountry: yup.string().required("Country is a required field"),
  DestinationcontactNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  DestinationalternateNumber: yup
    .string()
    .required()
    .matches(PHONE_NUMBER_REGX, "Phone number is not valid"),
  DestinationemailAddress: yup.string().required("Email Address is a required field").email(),
  DestinationadditionalNotes: yup.string().required("Additional Notes is a required field"),
  Category: yup.string().required("Category is a required field"),
  ShipmentWeight: yup.string().required("Shipment Weight is a required field"),
  Length: yup.string().required("Length is a required field"),
  Width: yup.string().required("Width is a required field"),
  Height: yup.string().required("Height is a required field"),
  Pieces: yup.string().required("Pieces is a required field"),
  ShipmentCost: yup.string().required("Shipment Cost is a required field"),
  // Pieces: yup.string().required(),
  ShipmentDescription: yup.string().required("Shipment Description is a required field"),
  shipmentTime: yup.string().required("Shipment Time is a required field"),
  shipmentDate: yup.string().required("Shipment Date is a required field"),
  whatToDo: yup.string().required(),

  shipementDeatials: yup.array().of(
    yup.object({
      ShipmentWeight: yup.string().required("Shipment Weight is a required field"),
      Length: yup.string().required("Length is a required field"),
      Height: yup.string().email().required("Height is a required field"),
      Pieces: yup.string().required("Pieces is a required field"),
      ShipmentDescription: yup.string().required("Shipment Description is a required field"),

    })
  ),
});
