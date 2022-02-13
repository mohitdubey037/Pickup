import moment from "moment";

const getInvoiceIdItem = (
  openInvoiceDrawer: (key: string, type: any) => void,
  id: any
) => {
  return <a onClick={() => openInvoiceDrawer(id, "invoice")}>{id}</a>;
};

const getOrderIdItem = (
  openInvoiceDrawer: (key: string, type: any) => void,
  id: any
) => {
  return <a onClick={() => openInvoiceDrawer(id, "orderDetails")}>{id}</a>;
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
        "Order Date": moment(item.shippingDate).format("DD/MM/YYYY"),
        Status: item.status ? item.status : "-",
        "Order Cost": `$${item.total.toFixed(2)}`,
      });
    });
  }
  return makeTableData;
};

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
