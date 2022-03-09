import { trash } from "app/assets/Icons";
import moment from "moment";

const getActionItem = () => {
  return <img src={trash} alt="delete" style={{ float: "left" }} />;
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
  openOrderDrawer: (type: string, data?: any) => void
) => {
  let makeTableData: any = [];
  if (orderData && orderData.length) {
    orderData.forEach((obj: any) => {
      makeTableData.push({
        "Order Number": obj?.OrderNumber || "N/A",
        Category: obj?.categoryId,
        "Item Count": getItemCount(openOrderDrawer, obj),
        Schedule:
          Number(obj.type) === 17
            ? moment(obj.orderedAt).format("HH:mm - DD/MM/YY")
            : Number(obj.type) === 16
            ? "RIGHT NOW	"
            : "ON HOLD",
        "Destination City": `${obj.dropLocation.locationCity}, ${obj.dropLocation.locationProvinceCode}`,
        Action: getActionItem(),
      });
    });
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
