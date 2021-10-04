import * as yup from "yup";


const SingleShipmentDetailSchema = yup.object().shape({
    Category: yup.string().required(),
    ShipmentWeight: yup.string().required(),
    Length: yup.string().required(),
    Width: yup.string().required(),
    Height: yup.string().email().required(),
    Pieces: yup.string().required(),
    ShipmentCost: yup.string().required(),
    // Pieces: yup.string().required(),
    ShipmentDescription: yup.string().required()
  });

  
  export const SingleShipmentDetailFormSchema = yup.object().shape({
    Category: yup.string().required(),
    ShipmentWeight: yup.string().required(),
    Length: yup.string().required(),
    Width: yup.string().required(),
    Height: yup.string().required(),
    Pieces: yup.string().required(),
    ShipmentCost: yup.string().required(),
    // Pieces: yup.string().required(),
    ShipmentDescription: yup.string().required()
  });

  export default  SingleShipmentDetailSchema;