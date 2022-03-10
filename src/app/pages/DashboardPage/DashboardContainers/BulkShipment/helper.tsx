import { trash } from "app/assets/Icons";
import moment from "moment";

const getActionItem = (
  deleteOrder: (index?: number) => void,
  index: number
) => {
  return (
    <img
      src={trash}
      alt="delete"
      style={{ float: "left" }}
      onClick={() => deleteOrder(index)}
    />
  );
};

const getItemCount = (
  openOrderDrawer: (type: string, data?: any) => void,
  data: any
) => {
  return (
    <a onClick={() => openOrderDrawer("orderItemDetails", data)}>
      {data?.items?.length}
    </a>
  );
};

export const getOrderData = (
  orderData: any,
  page: number,
  categoryById: any,
  openOrderDrawer: (type: string, data?: any) => void,
  deleteOrder: (index?: number) => void
) => {
  let makeTableData: any = [],
    rowsPerPage = 10;
  if (orderData && orderData.length) {
    makeTableData = orderData
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((obj: any, idx: number) => ({
        "Order Number": obj?.OrderNumber || "N/A",
        Category: categoryById?.[obj?.categoryId] || "N/A",
        "Item Count": getItemCount(openOrderDrawer, obj),
        Schedule:
          Number(obj.type) === 17
            ? moment(obj.orderedAt).format("HH:mm - DD/MM/YY")
            : Number(obj.type) === 16
            ? "RIGHT NOW	"
            : "ON HOLD",
        "Destination City": `${obj.dropLocation.locationCity}, ${obj.dropLocation.locationProvinceCode}`,
        Action: getActionItem(deleteOrder, idx),
      }));
  }
  return makeTableData;
};

export const bulkOrderColoumns = [
  {
    id: "OrderNumber",
    label: "Order Number",
  },
  {
    id: "categoryId",
    label: "Category",
  },
  {
    id: "itemCount",
    label: "Item Count",
  },
  {
    id: "type",
    label: "Schedule",
  },
  {
    id: "destinationCity",
    label: "Destination City",
  },
  {
    id: "action",
    label: "Action",
  },
];
