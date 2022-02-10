import React from "react";
import { TabWrapper } from "./style";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OrderDetailPage from "./OrderDetailsPage";
import ItemDetailsPage from "./ItemDetailsPage";
import TrackingDetailsPage from "./TrackingDetailsPage";
import { Box } from "@mui/material";

function SearchOrderDetailsDrawer(props: any) {
  let { singleOrderData } = props;
  const [value, setValue] = React.useState("orderDetails");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log("handleChange ~ newValue", newValue);
    setValue(newValue);
  };

  return (
    <TabWrapper>

      <Tabs value={value} onChange={handleChange} className="tabs">
        <Tab value="orderDetails" label="Order Details" />
        <Tab value="itemDetails" label="Item Details" />
        {/* <Tab value="trackingDetails" label="Tracking Details" /> */}
      </Tabs>
      
      <Box mb={3}>
        {value === "orderDetails" ? (
          <OrderDetailPage singleOrderData={singleOrderData} />
        ) : 
        // value === "itemDetails" ? (
          (
            <ItemDetailsPage singleOrderData={singleOrderData} />
          )
        // ) 
        // : (
          // <TrackingDetailsPage singleOrderData={singleOrderData} />
        }
     </Box>
     
    </TabWrapper>
  );
}
export default SearchOrderDetailsDrawer;
