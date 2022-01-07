import OrderDetailPage from "./OrderDetailsPage";

export const steps = [
  {
    label: "Looking for Driver",
    description: "Hello1 Aug 12, 2021  1:31 PM",
    // description: {<div>Hi<div>}
  },
  {
    label: "Driver Assigned",
    description: "Hello2 Aug 12, 2021  1:31 PM",
    // description:
    // <OrderDetailPage />,
    //   "Aug 12, 2021  1:32 PM",
  },
  {
    label: "Driver En Route To Pick Up",
    description: "Hello3 Aug 12, 2021  1:31 PM",
    // description: "Aug 12, 2021  1:33 PM",
  },
  {
    label: "Order Picked Up",
    description: "Hello4 Aug 12, 2021  1:31 PM",
    // description: "",
  },
  {
    statusName: "Driver En Route To Delivery",
    // description: "",
    timestamp: "Hello5 Aug 12, 2021  1:31 PM",
  },
  {
    label: "Driver Arrived At Delivery Location",
    description: "Hello6 Aug 12, 2021  1:31 PM",
    // description: "",
  },
  {
    label: "Order Delivered",
    description: "Shipment Delivered Successfully !",
  }
];

export const data = {
    driverDetails : {
        name: "John Doe",
        numberSpan: "BYNO 342",
        NumberSpan: "2020 Ford Ecosport"
    },
    logs: [...steps]
}
