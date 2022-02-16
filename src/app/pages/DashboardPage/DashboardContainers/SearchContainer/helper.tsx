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
    searchRecordData.forEach((item: any) => {
      makeTableData.push({
        Source: item.type,
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
  fromShippingDate: "",
  toShippingDate: "",
  status: "",
  originCity: "",
  originPostalCode: "",
  originProvinceState: "",
  originCountry: "",
  originEmail: "",
  destinationCity: "",
  destinationPostalCode: "",
  destinationProvinceState: "",
  destinationCountry: "",
  destinationEmail: "",
  destinationCompanyName: "",
  weightOperand: "",
  weight: "",
  weightDimension: "",
  volumnOperand: "",
  volume: "",
  volumeDimension: "",
  category: "",
  // orderType: "",
  // saveFilter: "",
};

export const STATUS_TYPES = [
  { label: "Active", value: 1 },
  { label: "Inactive", value: 2 },
];
