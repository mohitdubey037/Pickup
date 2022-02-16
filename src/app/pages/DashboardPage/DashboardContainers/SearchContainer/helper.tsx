import moment from "moment";

const getInvoiceIdItem = (
  openOrderDrawer: (key: string, type: any) => void,
  id: any
) => {
  return <a onClick={() => openOrderDrawer(id, "invoice")}>{id}</a>;
};

const getOrderIdItem = (
  openOrderDrawer: (key: string, type: any) => void,
  id: any
) => {
  return <a onClick={() => openOrderDrawer(id, "orderDetails")}>{id}</a>;
};

export const getSearchOrderData = (
  searchRecordData: any,
  openOrderDrawer: (key: string, type: any) => void
) => {
  let makeTableData: any = [];
  if (searchRecordData && searchRecordData.length) {
    searchRecordData.forEach((item: any) => {
      makeTableData.push({
        Source: item.type,
        "Invoice Id": getInvoiceIdItem(openOrderDrawer, item.invoiceId),
        "Order Id": getOrderIdItem(openOrderDrawer, item.orderId),
        "Order Date": moment(item.shippingDate).format("DD/MM/YYYY"),
        Status: item.status ? item.status : "-",
        "Order Cost": `$${item.total.toFixed(2)}`,
      });
    });
  }
  return makeTableData;
};

export const searchOrderColoumns = [
  {
    id: "type",
    label: "Source",
    isSort: false,
  },
  {
    id: "invoiceId",
    label: "Invoice Id",
    isSort: true,
  },
  {
    id: "orderId",
    label: "Order Id",
    isSort: true,
  },
  {
    id: "shippingDate",
    label: "Order Date",
    isSort: true,
  },
  {
    id: "status",
    label: "Status",
    isSort: false,
  },
  {
    id: "total",
    label: "Order Cost",
    isSort: true,
  },
];

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
