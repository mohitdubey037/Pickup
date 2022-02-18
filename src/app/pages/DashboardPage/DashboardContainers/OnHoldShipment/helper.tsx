import moment from "moment";
import { calendar } from "app/assets/Icons";

const getActionItem = (
  openOnHoldDrawer: (id: any, type: any) => void,
  id: any
) => {
  return (
    <div
      onClick={() => openOnHoldDrawer(id, "scheduleOrder")}
      style={{ display: "flex" }}
    >
      <img src={calendar} alt="calendar" />
    </div>
  );
};

const getOrderIdItem = (
  openOnHoldDrawer: (id: any, type: any) => void,
  itemCount: number,
  id: any
) => {
  return (
    <a onClick={() => openOnHoldDrawer(id, "orderDetails")}>{itemCount}</a>
  );
};

export const getOnHoldOrderData = (
  onHoldOrderData: any,
  openOnHoldDrawer: any
) => {
  let makeTableData: any = [];
  if (onHoldOrderData && onHoldOrderData.length) {
    onHoldOrderData.forEach((item: any) => {
      makeTableData.push({
        Source: item.source,
        Category: item.category,
        "Order Id": item.orderId,
        "Item Count": getOrderIdItem(
          openOnHoldDrawer,
          item.itemCount,
          item.orderId
        ),
        "Order Date": moment(item.shippingDate).format("DD/MM/YYYY"),
        Status: item.status ? item.status : "-",
        Action: getActionItem(openOnHoldDrawer, item.orderId),
      });
    });
  }
  return makeTableData;
};

export const onHoldOrderColoumns = [
  {
    id: "type",
    label: "Source",
    isSort: false,
  },
  {
    id: "category",
    label: "Category",
    isSort: false,
  },
  {
    id: "orderId",
    label: "Order Id",
    isSort: false,
  },
  {
    id: "itemCount",
    label: "Item Count",
    isSort: false,
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
    id: "action",
    label: "Action",
    isSort: false,
  },
];
