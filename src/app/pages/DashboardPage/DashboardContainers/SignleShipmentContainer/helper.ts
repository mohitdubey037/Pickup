/* eslint-disable no-debugger */

import { addShipmentDetail } from "services/SingleShipmentServices";


export const shipmentDetailsItemInitValue = {

  "quantity": '',
  "description": "description",
  "height": '',
  "length": '',
  "width": '',
  "weight": '',
  "sizeDimension": '',
  "weightDimension": '',
  "documet": "https://staging-api.pickups.mobi/order/public/uploads/1628059886387.png"
}


export const singleShipmentInitValues = {
  originCompanyName: "",
  originFirstName: "",
  originLastName: "",
  originAddressLine1: "",
  originAddressLine2: "",
  originCity: "",
  originPostalCode: "",
  originProvinceState: "",
  originCountry: "",
  originContactNumber: "",
  originAlternateContactNumber: "",
  originEmailAddress: "",
  originAdditionalNotes: "",

  destinationCompanyName: "",
  destinationFirstName: "",
  destinationLastName: "",
  destinationAddressLine1: "",
  destinationAddressLine2: "",
  destinationCity: "",
  destinationPostalCode: "",
  destinationProvinceState: "",
  destinationCountry: "",
  destinationContactNumber: "",
  destinationAlternateContactNumber: "",
  destinationEmailAddress: "",
  destinationAdditionalNotes: "",

  categoryId: "",
  fragile: "1",
  shipementDeatials: [
    { ...shipmentDetailsItemInitValue }
  ],




  // SCHEDULE SHIPMENT
  shipmentTime: "",
  shipmentDate: "",
  whatToDo: "",
};



// export const singleShipmentInitValues = {
//   originCompanyName: "Torinit",
//   originFirstName: "Amit",
//   originLastName: "Wagh",
//   originAddressLine1: "A",
//   originAddressLine2: "A",
//   originCity: "Ontario",
//   originPostalCode: "333",
//   originProvinceState: "A",
//   originCountry: "Canada",
//   originContactNumber: "9898989898",
//   originAlternateContactNumber: "9898989898",
//   originEmailAddress: "amit@torinit.ca",
//   originAdditionalNotes: "asd",

//   destinationCompanyName: "Torinit",
//   destinationFirstName: "Torinit",
//   destinationLastName: "Torinit",
//   destinationAddressLine1: "DA",
//   destinationAddressLine2: "DA",
//   destinationCity: "DC",
//   destinationPostalCode: "33",
//   destinationProvinceState: "asd",
//   destinationCountry: "Ca",
//   destinationContactNumber: "8888888888",
//   destinationAlternateContactNumber: "8888888888",
//   destinationEmailAddress: "torinit@gmail.com",
//   destinationAdditionalNotes: "asd",

//   categoryId: "1",

//   shipementDeatials: [
//     { ...shipmentDetailsItemInitValue }
//   ],




//   // SCHEDULE SHIPMENT
//   shipmentTime: "",
//   shipmentDate: "",
//   whatToDo: "",
// };

export const addShipmentForm = async (values: any, type: any) => {
  try {

    const res = await addShipmentDetail(transformPayloadToBackend(values))
    return res
  } catch (err) {
    return err;
  }
}


export const transformPayloadToBackend = (values: any) => {
  const payload = {
    categoryId: 2,
    distance: 0,

    dropLocation: {
      latitude: 21.11704845,
      longitude: 79.04402281,
      details: "details",
      saveLocation: 1,
      type: 1,
      addressType: 1,
      locationFirstName: values.originFirstName,
      locationLastName: values.originLastName,
      locationPhone: values.originContactNumber,
      locationAlternatePhone: values.originAlternateContactNumber,
      locationEmail: values.originEmailAddress,
      locationBillingType: 1,
      locationAddressLine1: values.originAddressLine1,
      locationAddressLine2: values.originAddressLine2,
      locationCity: values.originCity,
      locationPinCode: values.originPostalCode,
      locationProvinceCode: values.originProvinceState,
      locationCountry: values.originCountry
    },
    pickupLocation: {
      latitude: 21.11704845,
      longitude: 79.04402281,
      details: "details",
      saveLocation: 1,
      type: 1,
      addressType: 1,
      locationFirstName: values.destinationFirstName,
      locationLastName: values.destinationLastName,
      locationPhone: values.destinationContactNumber,
      locationAlternatePhone: values.destinationAlternateContactNumber,
      locationEmail: values.destinationEmailAddress,
      locationBillingType: 1,
      locationAddressLine1: values.destinationAddressLine1,
      locationAddressLine2: values.destinationAddressLine2,
      locationCity: values.destinationCity,
      locationPinCode: values.destinationPostalCode,
      locationProvinceCode: values.destinationProvinceState,
      locationCountry: values.destinationCountry
    },
    items: values.shipementDeatials
  }


  return payload
}
