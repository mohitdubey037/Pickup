
import { addShipmentDetail } from "services/SingleShipmentServices";
import service from "../../../../../services/index";
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
  originAlternateNumber: "",
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
  destinationtContactNumber: "",
  destinationAlternateContactNumber: "",
  destinationEmailAddress: "",
  destinationAdditionalNotes: "",

  //SHIPMENT DETAILS
  Category: "",
  ShipmentWeight: "",
  Length: "",
  Width: "",
  Height: "",
  Pieces: "",
  ShipmentCost: "",
  ShipmentDescription: "",

  //SHIPMENT DETAILS ITEMS
  shipementDeatials: [
    {
      ShipmentWeight: "",
      Length: "",
      Width: "",
      Height: "",
      Pieces: "",
      ShipmentCost: "",
      ShipmentDescription: "",
    },
    {
      ShipmentWeight: "",
      Length: "",
      Width: "",
      Height: "",
      Pieces: "",
      ShipmentCost: "",
      ShipmentDescription: "",
    },
    
  ],

  // SCHEDULE SHIPMENT
  shipmentTime: "",
  shipmentDate: "",
  whatToDo: "",
};

export const addShipmentForm = async (values:any,type:any)=>{
  try{
 
  const res = await addShipmentDetail(values)
  return res
} catch(err){
  return err;
}
}


export const transformToBackend=(values:any)=>{
  const payload={
    dropLocation:{
      "latitude": 21.11704845,
      "longitude": 79.04402281,
      details:"",
      saveLocation:1,
      type:1,
      addressType:1,
      locationFirstName:values.originfirstName,

    }
  }
}