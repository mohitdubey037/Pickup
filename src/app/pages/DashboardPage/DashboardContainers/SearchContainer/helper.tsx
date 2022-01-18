import { imageIcon, printer } from "app/assets/Icons";
import Services from "../../../../../services/index";

const getInvoiceIdItem = (
  openInvoiceDrawer: (key: string, type: any) => void,
  id: any
) => {
  return <div onClick={() => openInvoiceDrawer(id, "invoice")}>{id}</div>;
};

const getOrderIdItem = (
  openInvoiceDrawer: (key: string, type: any) => void,
  id: any
) => {
  return <div onClick={() => openInvoiceDrawer(id, "orderDetails")}>{id}</div>;
};

export const searchTable = (
  searchRecordData: any,
  openInvoiceDrawer: (key: string, type: any) => void
) => {
  let makeTableData: any = [];
  if (searchRecordData && searchRecordData.length) {
    searchRecordData.map((item: any) => {
      makeTableData.push({
        Source: "Uploaded",
        "Invoice Id": getInvoiceIdItem(openInvoiceDrawer, item.invoiceId),
        "Order Id": getOrderIdItem(openInvoiceDrawer, item.orderId),
        "Order Date": item.shippingDate,
        Status: item.status ? item.status : "-",
        "Order Cost": "$" + item.shipmentCost,
      });
    });
  }
  return makeTableData;
};

// export const getSearchOrderData = async () => {
//   fetch(
//     "https://staging-api.pickups.mobi/order/v1/api/order/business/shipments",
//     {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMTgxLCJ0eXBlIjoibG9naW4iLCJyb2xlIjoxNywiaWF0IjoxNjI4NTA3ODUzfQ.nmXM8_mkHwehZIFi7XX6_g8tR2o4l3EPsUufRIXQpLM",
//       },
//     }
//   )
//     .then((response) => response.json())
//     .then((resData) => {
//       console.log("response", resData, JSON.stringify(resData));
//       return resData.data.data;
//     });
// };

export const advanceFilterInitValues = {
  from_shipping: new Date(),
  to_shipping: new Date(),
  status: "",
  origin_city: "",
  origin_postal_code: "",
  origin_province_state: "",
  origin_country: "",
  origin_email: "",
  destination_city: "",
  destination_postal_code: "",
  destination_province_state: "",
  destination_country: "",
  destination_email: "",
  destination_company_name: "",
  weight: "",
  weight_value: "",
  weight_unit: "",
  volume: "",
  volume_value: "",
  volume_unit: "",
  category: "",
};

export const STATUS_TYPES = [
  { label: "Active", value: 1 },
  { label: "Inactive", value: 2 },
];
