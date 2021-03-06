import { createRef, SyntheticEvent, useEffect, useState } from "react";
import { TabWrapper } from "./style";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { createPortal } from "react-dom";
import html2pdf from "html2pdf.js";

import { getSearchOrderListById } from "services/SearchItemService";
import { showToast } from "utils";
import OrderDetailPage from "./OrderDetailsPage";
import ItemDetailsPage from "./ItemDetailsPage";
import TrackingDetailsPage from "./TrackingDetailsPage";
import OrderDetailsTemplate from "./OrderDetailsTemplate";
import { AddressDetailsSkeleton } from "./AddressDetailsSkeleton";

const ref: any = createRef();

export interface Props {
  orderId: any;
  setDrawerOpen?: (flag: boolean) => void;
}

function SearchOrderDetailsDrawer({ orderId, setDrawerOpen }: Props) {
  const [loadingOrderDetails, setloadingOrderDetails] =
    useState<boolean>(false);
  const [singleOrderData, setSingleOrderData] = useState([{}]);
  const [value, setValue] = useState("orderDetails");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    getSingleOrderData();
  }, [orderId]);

  const getSingleOrderData = async () => {
    setloadingOrderDetails(true);
    const res = (await getSearchOrderListById(orderId)) as any;
    if (res.success) {
      const orderListByID = res.response.data.data;
      setSingleOrderData(orderListByID);
    } else if (
      res.response.status === 400 &&
      res.response.message === "Order not Found!"
    ) {
      setDrawerOpen?.(false);
      showToast("Order Not Found", "error");
    }
    setloadingOrderDetails(false);
  };

  const downloadOrderDetails = () => {
    var opt = {
      image: { type: "png", quality: 0.98 },
      filename: `Order_Details_${orderId}.pdf`,
    };
    html2pdf().set(opt).from(ref.current).save();
  };

  return (
    <>
      {loadingOrderDetails ? (
        <AddressDetailsSkeleton />
      ) : (
        <TabWrapper>
          {createPortal(
            <div id="print-container" ref={ref}>
              <OrderDetailsTemplate
                orderData={singleOrderData}
                orderId={orderId}
              />
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
      )}
    </>
  );
}
export default SearchOrderDetailsDrawer;
