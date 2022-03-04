import moment from "moment";

const getInvoiceIdItem = (
  openInvoiceDrawer: (id: any, type: any) => void,
  invoiceNumber: number,
  id: any
) => {
  return (
    <a onClick={() => openInvoiceDrawer(id, "invoice")}>{invoiceNumber}</a>
  );
};

const getOrderIdItem = (
  openInvoiceDrawer: (id: any, type: any) => void,
  shipmentCount: number,
  id: any
) => {
  return (
    <a onClick={() => openInvoiceDrawer(id, "orderItemDetails")}>
      {shipmentCount}
    </a>
  );
};

export const getInvoiceData = (
  invoiceData: any,
  openInvoiceDrawer: (id: any, type: any) => void
) => {
  let makeTableData: any = [];
  if (invoiceData && invoiceData.length) {
    makeTableData = invoiceData.map((item: any) => {
      return {
        "Invoice Number": getInvoiceIdItem(
          openInvoiceDrawer,
          item.invoiceNumber,
          item.invoiceId
        ),
        "Order Count": getOrderIdItem(
          openInvoiceDrawer,
          item.shipmentCount,
          item.invoiceId
        ),
        "Shipped By": item.shippedBy,
        "Invoice Date": moment(item.invoiceCreatedAt).format("DD/MM/YYYY"),
        "Payment Status": item.isPayment ? "Complete" : "Pending",
        "Invoice Amount": `$${item.total.toFixed(2)}`,
      };
    });
  }
  return makeTableData;
};

export const getDisabledInvoiceRows = (invoiceData: any) => {
  let invoiceIds: any = [];
  invoiceData.forEach((item, idx) => {
    if (!item.invoicePdf) {
      invoiceIds.push(idx);
    }
  });
  return invoiceIds;
};

export const invoiceColoumns = [
  {
    id: "invoiceNumber",
    label: "Invoice Number",
    isSort: true,
  },

  {
    id: "orderCount",
    label: "Order Count",
  },
  {
    id: "shipedBy",
    label: "Shipped By",
  },
  {
    id: "invoiceCreatedAt",
    label: "Invoice Date",
    isSort: true,
  },
  {
    id: "isPayment",
    label: "Payment Status",
  },
  {
    id: "total",
    label: "Invoice Amount",
    isSort: true,
  },
];
