import * as yup from "yup";
import moment from "moment";

import { calendar } from "app/assets/Icons";
import { getSingleDate } from "../SignleShipmentContainer/helper";

export const scheduleShipmentFormSchema = yup.object().shape({
  scheduleType: yup.string().required("Please select schedule type"),
  shipmentDate: yup.string().when("scheduleType", {
    is: (scheduleType) => scheduleType === "17",
    then: yup.string().required("Order Date is a required field").nullable(),
  }),
  shipmentTime: yup.string().when("scheduleType", {
    is: (scheduleType) => scheduleType === "17",
    then: yup
      .string()
      .required("Order Time is a required field")
      .test("minShipmentDateLimit", "Please select future time", function () {
        let orderedAt =
          moment(
            getSingleDate(this.parent.shipmentDate, this.parent.shipmentTime)
          ).format("YYYY-MM-DD HH:mm") + ":00";
        if (
          moment(orderedAt, "YYYY-MM-DD HH:mm:ss").diff(
            moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss")
          ) < 0
        ) {
          return false;
        } else {
          return true;
        }
      })
      .test(
        "maxShipmentDateLimit",
        "Schedule time should be within 5 Days",
        function () {
          let orderedAt =
            moment(
              getSingleDate(this.parent.shipmentDate, this.parent.shipmentTime)
            ).format("YYYY-MM-DD HH:mm") + ":00";
          if (
            moment(orderedAt, "YYYY-MM-DD HH:mm:ss").diff(
              moment().add(120, "hours").format("YYYY-MM-DD HH:mm:ss")
            ) > 0
          ) {
            return false;
          } else {
            return true;
          }
        }
      ),
  }),
});

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
        Source: item?.source || "N/A",
        Category: item?.category || "N/A",
        "Order Id": item?.orderId || "N/A",
        "Item Count": item.itemCount
          ? getOrderIdItem(openOnHoldDrawer, item.itemCount, item.orderId)
          : "N/A",
        "Order Date": item.shippingDate
          ? moment(item.shippingDate).format("DD/MM/YYYY")
          : "N/A",
        Status: item?.status || "N/A",
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
  },
  {
    id: "category",
    label: "Category",
  },
  {
    id: "orderId",
    label: "Order Id",
    isSort: true,
  },
  {
    id: "itemCount",
    label: "Item Count",
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
    id: "action",
    label: "Action",
  },
];
