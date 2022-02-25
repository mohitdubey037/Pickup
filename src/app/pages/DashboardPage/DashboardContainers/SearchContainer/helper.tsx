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
        Source: item?.type || "N/A",
        "Consignment Id": item?.consignmentId || "N/A",
        "Invoice Id": item.invoiceId
          ? getInvoiceIdItem(openOrderDrawer, item.invoiceId)
          : "N/A",
        "Order Id": item.orderId
          ? getOrderIdItem(openOrderDrawer, item.orderId)
          : "N/A",
        "Order Date": item.shippingDate
          ? moment(item.shippingDate).format("DD/MM/YYYY")
          : "N/A",
        // Status: item.status
        //   ? item.status === "Payment Pending"
        //     ? getOrderStatusItem(completeOrderPayment, item.orderId)
        //     : item.status
        //   : "N/A",
        Status: item.status ? item.status.replaceAll("-", " ") : "N/A",
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
  },
  {
    id: "consignmentId",
    label: "Consignment Id",
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
  },
  {
    id: "total",
    label: "Order Cost",
    isSort: true,
  },
];

export const advanceFilterInitValues = (data) => ({
  fromShippingDate: data?.fromShippingDate || null,
  toShippingDate: data?.toShippingDate || null,
  status: data?.status || "",
  originCity: data?.originCity || "",
  originPincode: data?.originPincode || "",
  originProvince: data?.originProvince || "",
  originCountry: data?.originCountry || "",
  originEmail: data?.originEmail || "",
  destinationCity: data?.destinationCity || "",
  destinationPincode: data?.destinationPincode || "",
  destinationProvince: data?.destinationProvince || "",
  destinationCountry: data?.destinationCountry || "",
  destinationEmail: data?.destinationEmail || "",
  weightOperand: data?.weightOperand || "",
  weight: data?.weight || "",
  weightDimension: data?.weightDimension || "",
  volumnOperand: data?.volumnOperand || "",
  volume: data?.volume || "",
  volumeDimension: data?.volumeDimension || "",
  category: data?.category || "",
  // orderType: data?.fromShippingDate || "",
  // saveFilter: data?.fromShippingDate || "",
});
