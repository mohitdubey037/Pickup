
import { addShipmentDetail } from "services/SingleShipmentServices";
import service from "../../../../../services/index";
export const singleShipmentInitValues = {
  OrigincompanyName: "",
  OriginfirstName: "",
  OriginlastName: "",
  OriginaddressLine1: "",
  OriginaddressLine2: "",
  Origincity: "",
  OriginpostalCode: "",
  OriginprovinceState: "",
  Origincountry: "",
  OrigincontactNumber: "",
  OriginalternateNumber: "",
  OriginemailAddress: "",
  OriginadditionalNotes: "",
  DestinationcompanyName: "",
  DestinationfirstName: "",
  DestinationlastName: "",
  DestinationaddressLine1: "",
  DestinationaddressLine2: "",
  Destinationcity: "",
  DestinationpostalCode: "",
  DestinationprovinceState: "",
  Destinationcountry: "",
  DestinationtactNumber: "",
  DestinationalternateNumber: "",
  DestinationemailAddress: "",
  DestinationadditionalNotes: "",

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
