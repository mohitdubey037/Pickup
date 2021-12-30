import * as yup from "yup";
import { PHONE_NUMBER_REGX } from "../../../../../constants";

export const singleShipmentFormSchema = yup.object().shape({
  originCompanyName: yup.string().required("Company Name is a required field"),
  originFirstName: yup.string().required("First Name is a required field"),
  originLastName: yup.string().required("Last Name is a required field"),
  originAddressLine1: yup.string().required("Address Line 1 is a required field"),
  originAddressLine2: yup.string().required("Address Line 2 is a required field"),
  originCity: yup.string().required("City is a required field"),
  originPostalCode: yup.string().required("Postal Code is a required field"),
  originProvinceState: yup.string().required("Province/State is a required field"),
  originCountry: yup.string().required("Country is a required field"),
  originContactNumber: yup
    .string()
    .required("Phone number is not valid")
    .matches(PHONE_NUMBER_REGX, ),
  originAlternateContactNumber: yup
    .string()
    .required("Alternate Contact Number is not valid")
    .matches(PHONE_NUMBER_REGX, ),
  originEmailAddress: yup.string().required("Email Address is a required field"),
  originAdditionalNotes: yup.string().required("Additional Notes is a required field"),

  destinationCompanyName: yup.string().required("Company Name is a required field"),
  destinationFirstName: yup.string().required("First Name is a required field"),
  destinationLastName: yup.string().required("Last Name is a required field"),
  destinationAddressLine1: yup.string().required("Address Line 1 is a required field"),
  destinationAddressLine2: yup.string().required("Address Line 2 is a required field"),
  destinationCity: yup.string().required("City is a required field"),
  destinationPostalCode: yup.string().required("Postal Code is a required field"),
  destinationProvinceState: yup.string().required("Province/State is a required field"),
  destinationCountry: yup.string().required("Country is a required field"),
  destinationContactNumber: yup
    .string()
    .required("Phone number is not valid")
    .matches(PHONE_NUMBER_REGX, ),
  destinationAlternateContactNumber: yup
    .string()
    .required( "Alternate Contact Number is not valid")
    .matches(PHONE_NUMBER_REGX,),
  destinationEmailAddress: yup.string().required("Email Address is a required field").email(),
  destinationAdditionalNotes: yup.string().required("Additional Notes is a required field"),
  Category: yup.string().required("Category is a required field"),
  ShipmentWeight: yup.string().required("Shipment Weight is a required field"),
  Length: yup.string().required("Length is a required field"),
  Width: yup.string().required("Width is a required field"),
  Height: yup.string().required("Height is a required field"),
  Pieces: yup.string().required("Pieces is a required field"),
  ShipmentCost: yup.string().required("Shipment Cost is a required field"),
 
  ShipmentDescription: yup.string().required("Shipment Description is a required field"),
  shipmentTime: yup.string().required("Shipment Time is a required field"),
  shipmentDate: yup.string().required("Shipment Date is a required field"),
  whatToDo: yup.string().required(),

  shipementDeatials: yup.array().of(
    yup.object({
      ShipmentWeight: yup.string().required("Shipment Weight is a required field"),
      Length: yup.string().required("Length is a required field"),
      Width: yup.string().required("Width is a required field"),
      Height: yup.string().required("Height is a required field"),
      Pieces: yup.string().required("Pieces is a required field"),
      ShipmentDescription: yup.string().required("Shipment Description is a required field"),

    })
  )
});
