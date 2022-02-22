import moment from "moment";
import CustomTooltip from "app/components/Tooltip/CustomTooltip";

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

const getOrderStatusItem = (
  completeOrderPayment: (orderId: number) => void,
  orderId: any
) => {
  return (
    <a onClick={() => completeOrderPayment(orderId)}>
      <CustomTooltip
        text="Click here to complete payment"
        content="Payment Pending"
      />
    </a>
  );
};

export const getSearchOrderData = (
  searchRecordData: any,
  openOrderDrawer: (key: string, type: any) => void,
  completeOrderPayment: (orderId: number) => void
) => {
  let makeTableData: any = [];
  if (searchRecordData && searchRecordData.length) {
    searchRecordData.forEach((item: any) => {
      makeTableData.push({
        Source: item.type ? item.type : "N/A",
        "Invoice Id": item.invoiceId
          ? getInvoiceIdItem(openOrderDrawer, item.invoiceId)
          : "N/A",
        "Order Id": item.orderId
          ? getOrderIdItem(openOrderDrawer, item.orderId)
          : "N/A",
        "Order Date": item.shippingDate
          ? moment(item.shippingDate).format("DD/MM/YYYY")
          : "N/A",
        Status: item.status
          ? item.status === "Payment Pending"
            ? getOrderStatusItem(completeOrderPayment, item.orderId)
            : item.status
          : "N/A",
        "Order Cost": item.total ? `$${item.total.toFixed(2)}` : "N/A",
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
