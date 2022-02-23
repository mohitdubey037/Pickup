import { createRef, SyntheticEvent, useState } from "react";
import { TabWrapper } from "./style";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { createPortal } from "react-dom";
import html2pdf from "html2pdf.js";

import OrderDetailPage from "./OrderDetailsPage";
import ItemDetailsPage from "./ItemDetailsPage";
import TrackingDetailsPage from "./TrackingDetailsPage";
import OrderDetailsTemplate from "./OrderDetailsTemplate";

const ref: any = createRef();

function SearchOrderDetailsDrawer(props: any) {
  let { singleOrderData, orderId } = props;

  const [value, setValue] = useState("orderDetails");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const downloadOrderDetails = () => {
    var opt = {
      image: { type: "png", quality: 0.98 },
      filename: `Order_Details_${orderId}.pdf`,
    };
    html2pdf().set(opt).from(ref.current).save();
  };

  return (
    <TabWrapper>
      {createPortal(
        <div id="print-container" ref={ref}>
          <OrderDetailsTemplate orderData={singleOrderData} orderId={orderId} />
        </div>,
        document.getElementById("print-root") as HTMLElement
      )}

      <Tabs value={value} onChange={handleChange} className="tabs">
        <Tab value="orderDetails" label="Order Details" />
        <Tab value="itemDetails" label="Item Details" />
        <Tab value="trackingDetails" label="Tracking Details" />
      </Tabs>

      <Box mb={3}>
        {value === "orderDetails" ? (
          <OrderDetailPage
            singleOrderData={singleOrderData}
            downloadOrderDetails={downloadOrderDetails}
          />
        ) : value === "itemDetails" ? (
          <ItemDetailsPage singleOrderData={singleOrderData} />
        ) : (
          <TrackingDetailsPage singleOrderData={singleOrderData} />
        )}
      </Box>
    </TabWrapper>
  );
}
export default SearchOrderDetailsDrawer;
